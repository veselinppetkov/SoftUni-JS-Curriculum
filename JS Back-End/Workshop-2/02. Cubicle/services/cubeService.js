const Cube = require(`../models/Cube.js`);

const getAllCubes = () => Cube.find({}).lean();

const getCubeById = (id) => Cube.findById(id);

const createCube = async (name, description, imageUrl, difficultyLevel) => {
  await Cube.create({
    name,
    description,
    imageUrl,
    difficultyLevel,
  });
};

const searchCube = (title, from, to) => {
  let result = getAllCubes();

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

const cubeService = { createCube, getAllCubes, getCubeById, searchCube };

module.exports = cubeService;
