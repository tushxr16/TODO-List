require("dotenv").config();
const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;

module.exports = async () => {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect(URI, connectionParams);
    console.log("Connected to database.");
  } catch (error) {
    console.log("Could not connect to database.", error);
  }
};
