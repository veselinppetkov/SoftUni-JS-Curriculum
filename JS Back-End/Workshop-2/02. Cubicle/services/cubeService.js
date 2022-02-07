const Accessory = require(`../models/Accessory.js`);
const Cube = require(`../models/Cube.js`);

const getAllCubes = () => Cube.find({}).lean();

const getCubeById = (id) => Cube.findById(id).populate(`accessories`).lean();

const createCube = async (name, description, imageUrl, difficultyLevel) => {
  await Cube.create({
    name,
    description,
    imageUrl,
    difficultyLevel,
  });
};

const searchCube = async (title, from, to) => {
  let result = await getAllCubes();

  if (title) {
    result = result.filter((x) =>
      x.name.toLowerCase().includes(title.toLowerCase())
    );
  }

  if (from) {
    result = result.filter((x) => x.difficultyLevel >= from);
  }

  if (to) {
    result = result.filter((x) => x.difficultyLevel <= to);
  }

  return result;
};

const attachAccessory = async (cubeId, accessoryId) => {
  const cube = await Cube.findById(cubeId);
  const accessory = await Accessory.findById(accessoryId);

  cube.accessories.push(accessory);
  return cube.save();
};

const cubeService = {
  createCube,
  getAllCubes,
  getCubeById,
  searchCube,
  attachAccessory,
};

module.exports = cubeService;
