import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import validator from "validator";


const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// Login user
export const loginUser = async (req, res) => {
  const { username, password } = req.body; 
  try {
    const user = await userModel.findOne({ username }); 
    if (!user) {
      return res.json({ success: false, message: "User doesn't exist" });
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid Password" });
    }

    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.error("Login error:", error);
    res.json({ success: false, message: error.message || "Error occurred during login" });
  }
};

// Register user
export const registerUser = async (req, res) => {
  const { username, email, password } = req.body; 
  try {
    const existingUsername = await userModel.findOne({ username }); 
    if (existingUsername) {
      return res.json({ success: false, message: "Username already exists" });
    }

    const existingEmail = await userModel.findOne({ email }); 
    if (existingEmail) {
      return res.json({ success: false, message: "Email already exists" });
    }

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please enter a valid email" });
    }

    if (password.length < 8) {
      return res.json({ success: false, message: "Please enter a strong password" });
    }

 
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      username: username, 
      email: email,
      password: hashedPassword,
    });

    await newUser.save();
    const token = createToken(newUser._id);
    res.json({ success: true, token });
  } catch (error) {
    console.error("Registration error:", error); 
    res.json({ success: false, message: error.message || "Error occurred during registration" });
  }
};
