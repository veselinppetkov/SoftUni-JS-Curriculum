const Cube = require(`../models/Cube.js`);

const getAll = () => Cube.cubes;

const create = (name, description, imageUrl, difficultyLevel) => {
  const cube = new Cube(name, description, imageUrl, difficultyLevel);

  Cube.addCube(cube);
};

const cubeService = { create, getAll };

module.exports = cubeService;
