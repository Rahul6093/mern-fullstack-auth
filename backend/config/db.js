const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://rahul:rahul1234@cluster0.xs4welc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection failed", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
