const mongoose = require(`mongoose`);
const connectionStr = `mongodb://localhost:27017/mytestdb`;

const initDb = () => mongoose.connect(connectionStr);

module.exports = initDb;
