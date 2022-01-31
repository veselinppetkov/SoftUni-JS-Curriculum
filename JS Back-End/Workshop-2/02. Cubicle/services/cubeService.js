const Cube = require(`../models/Cube.js`);

const getAllCubes = () => Cube.cubes;

const getCubeById = (id) => Cube.cubes.find((x) => x.id == id);

const createCube = (name, description, imageUrl, difficultyLevel) => {
  const cube = new Cube(name, description, imageUrl, difficultyLevel);

  Cube.addCube(cube);
};

const searchCube = (title, from, to) => {
  let result = Cube.cubes;

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
