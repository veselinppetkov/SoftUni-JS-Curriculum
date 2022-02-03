const initDb = require(`./config.js`);
const Person = require(`./model/Person`);

initDb().then(() => {
  let person = new Person({
    "first-name": "Kalinka",
    "last-name": "Papazova}",
    age: "25",
  });

  person.save();
  console.log(`Person successfully saved!`);
});
