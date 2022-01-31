const Cube = require(`../models/Cube.js`);

const getAllCubes = () => Cube.cubes;

const getCubeById = (id) => Cube.cubes.find((x) => x.id == id);

const createCube = (name, description, imageUrl, difficultyLevel) => {
  const cube = new Cube(name, description, imageUrl, difficultyLevel);

  Cube.addCube(cube);
};

const cubeService = { createCube, getAllCubes, getCubeById };

module.exports = cubeService;
