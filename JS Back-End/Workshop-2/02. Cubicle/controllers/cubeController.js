const express = require(`express`);
const { createCube, getCubeById } = require("../services/cubeService");

const router = express.Router();

router.get(`/create`, (req, res) => {
  res.render(`create`);
});

router.post(`/create`, (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;

  createCube(name, description, imageUrl, difficultyLevel);
  res.redirect(`/`);
});

router.get(`/:cubeId`, (req, res) => {
  const id = req.params.cubeId;
  const cube = getCubeById(id);

  res.render(`details`, { cube });
});

module.exports = router;
