const initDb = require(`./config.js`);
const Person = require(`./model/Person.js`);

// First method
//       |
//       v

// initDb().then(() => {
//   Person.find({ "first-name": "Kalinka" }).then((data) => console.log(data));
// });

// Second method
//       |
//       v

// async function createPerson() {
//   await initDb();

//   Person.create({
//     "first-name": "Ivan",
//     "last-name": "Newman",
//     age: "107",
//   }).then((r) => console.log(r));
// }
// createPerson();

initDb().then(() => {
  Person.where(`age`)
    .gte(40)
    .then((res) => console.log(res));
});
