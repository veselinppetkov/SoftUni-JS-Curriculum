const mongoose = require(`mongoose`);

const petSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    required: true,
    min: 1,
    max: 4,
  },
});

const Pet = mongoose.model(`Pet`, petSchema);

module.exports = Pet;
