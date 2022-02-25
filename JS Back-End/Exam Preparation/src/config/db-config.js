const mongoose = require(`mongoose`);

const { DB_CONNECTION_STRING } = require(`../constants`);

function initDb() {
  return mongoose.connect(DB_CONNECTION_STRING);
}

module.exports = initDb;
