const express = require("express");
const mongoose = require("mongoose"); 
const cors = require("cors");
const UserModel = require('./models/users'); 

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://UsersDB:CAjOXSXhi9FJFesq@cluster.ghf13.mongodb.net/myDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected successfully"))
.catch(err => console.error("Error connecting to MongoDB:", err));

app.post('/users', (req, res) => {  // Updated route
    UserModel.create(req.body)
    .then(user => res.json(user)) 
    .catch(err => res.status(400).json(err)); 
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
