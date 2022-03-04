const mongoose = require(`mongoose`);

const accessorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    maxlength: 500,
  },
  imageUrl: {
    type: String,
    required: true,
    validate: [/^https?:\/\//, `ImageURL is invalid`],
  },
});

const Accessory = mongoose.model(`Accessory`, accessorySchema);

module.exports = Accessory;
