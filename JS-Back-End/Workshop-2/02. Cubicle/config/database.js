const mongoose = require(`mongoose`);

const initDb = async (connectionString) => {
  await mongoose.connect(connectionString);
};

module.exports = initDb;
