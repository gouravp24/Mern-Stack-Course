const mongoose = require("mongoose");

const connectMongoDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/users-db");
    console.log("Connected to users-db");
  } catch (error) {
    console.error(error);
  }
};
module.exports = connectMongoDb; 
