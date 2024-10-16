import express from "express";
import userRouter from "./routes/userRoutes.js";
import cors from 'cors';
import "dotenv/config";
import DBConnection from './database/connection.js';

const app = express()
const port = 5000 


// Connect to the database
DBConnection();

// middlewere
app.use(express.json());
app.use(cors());

app.get("/", (req, res)=>{
  res.send("API working")
})

// api endpoint
app.use("/api/user", userRouter)



app.listen(port,() =>{
  console.log(`Server Started on http://localhost:${port}`)
})