const mongodb = require(`mongodb`);
const connectionStr = `mongodb://localhost:27017`;

const mongoClient = new mongodb.MongoClient(connectionStr);

mongoClient
  .connect()
  .then(() => {
    console.log(`MongoDB successfully connected!`);

    const db = mongoClient.db(`mytestdb`).collection(`people`);
    const collection = db.collection(`people`);

    return collection.find({}).toArray();
  })
  .then((data) => {
    console.log(data);
  });
