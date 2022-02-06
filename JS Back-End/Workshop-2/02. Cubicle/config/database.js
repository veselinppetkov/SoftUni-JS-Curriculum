const mongoose = require(`mongoose`);

async function initDb(connectionString) {
  await mongoose.connect(connectionString);
}

initDb();

module.exports = initDb;
