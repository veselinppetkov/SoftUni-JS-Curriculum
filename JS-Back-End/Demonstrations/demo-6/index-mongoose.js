const initDb = require(`./config.js`);
const Person = require(`./model/Person`);

initDb().then(() => {
  // First method
  //       |
  //       v

  // let person = new Person({
  //   "first-name": "Kalinka",
  //   "last-name": "Papazova",
  //   age: "25",
  // });

  // person.save();
  // console.log(`Person successfully saved!`);

  // Second method
  //       |
  //       v

  Person.create({
    "first-name": "Jannie",
    "last-name": "Rodarie",
    age: "40",
  }).then((person) => {
    console.log(`Person successfully created!`, person);
  });
});
