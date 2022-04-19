const mongoose = require("mongoose");
require("../models/User");
require("../models/Auction");

const connectionString = "mongodb://localhost:27017/auction-house";

module.exports = async () => {
  try {
    await mongoose.connect(connectionString);

    console.log(`DB Connected`);

    mongoose.connection.on("error", (err) => {
      console.error(`DB Error`);
      console.error(err);
    });
  } catch (err) {
    console.error("Error connecting to DB");
    process.exit(1);
  }
};
