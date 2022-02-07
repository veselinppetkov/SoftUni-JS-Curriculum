const Accessory = require(`../models/Accessory.js`);

const createAccessory = async (name, description, imageUrl) => {
  await Accessory.create({
    name,
    description,
    imageUrl,
  });
};

const getAllAccessories = Accessory.find({}).lean();

const getAllWithout = async (accessoryIds) => {
  return Accessory.find({ _id: { $nin: accessoryIds } }).lean();
};

const accessoryService = {
  getAllAccessories,
  getAllWithout,
  createAccessory,
};

module.exports = accessoryService;
