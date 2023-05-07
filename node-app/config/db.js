require("dotenv").config();
const mongoose = require("mongoose");
const connectMongo = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      retryWrites: true,
    });
    console.log("connection to database successful");
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectMongo;
