const Accessory = require(`../models/Accessory.js`);

const createAccessory = async (name, description, imageUrl) => {
  await Accessory.create({
    name,
    description,
    imageUrl,
  });
};

const accessoryService = { createAccessory };

module.exports = accessoryService;
