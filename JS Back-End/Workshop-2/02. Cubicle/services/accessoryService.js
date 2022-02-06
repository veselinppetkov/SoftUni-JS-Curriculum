const Accessory = require(`../models/Accessory.js`);

const createAccessory = async (name, description, imageUrl) => {
  await Accessory.create({
    name,
    description,
    imageUrl,
  });
};

const getAllAccessories = Accessory.find({}).lean();

const getAllWithout = async (accessoryIds) =>
  await (await Accessory.find().where(`_id`)).findIndex(accessoryIds).lean();

const accessoryService = {
  getAllAccessories,
  getAllWithout,
  createAccessory,
};

module.exports = accessoryService;
