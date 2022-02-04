const mongoose = require(`mongoose`);

const personSchema = new mongoose.Schema({
  "first-name": String,
  "last-name": String,
  age: {
    type: Number,
    required: true,
    min: [1, `Cannot be lower than 1, got {VALUE}`],
    max: [100, `Cannot exceed the age of 100, got {VALUE}`],
  },
  pet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pet",
  },
});

personSchema.methods.getAge = function () {
  return `I'am ${this.age}-years old`;
};

personSchema.virtual(`isAdult`).get(function () {
  return this.age >= 18;
});

const Person = mongoose.model(`Person`, personSchema);

module.exports = Person;
