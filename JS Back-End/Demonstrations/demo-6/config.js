const mongodb = require(`mongodb`);
const connectionStr = `mongodb://localhost:27017/mytestdb`;

const initDb = () => new mongodb.MongoClient(connectionStr);

module.exports = initDb;
