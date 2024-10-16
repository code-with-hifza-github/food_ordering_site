import mongoose from "mongoose";

const DBConnection = () => {
  console.log("MongoDB URI:", process.env.DB_URL); 

  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("Database is connected");
    })
    .catch((err) => {
      console.log(err);
    });
};
export default DBConnection;