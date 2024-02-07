const mongoose = require("mongoose");

//const URI = " mongodb://127.0.0.1:27017/courseApp_admin";
const URI = process.env.MONGO_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("database connection successful");
  } catch (error) {
    console.error("database connection failed ");
    process.exit(0);
  }
};

module.exports = connectDb;
