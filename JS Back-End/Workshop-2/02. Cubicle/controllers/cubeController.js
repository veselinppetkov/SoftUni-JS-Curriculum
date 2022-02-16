const express = require(`express`);
const { createCube, getCubeById } = require("../services/cubeService");
const cubeAccessoryController = require(`./cubeAccessoryController`);

const router = express.Router();

router.get(`/create`, (req, res) => {
  res.render(`cube/create`);
});

router.post(`/create`, async (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;

  try {
    await createCube(name, description, imageUrl, difficultyLevel);
    res.redirect(`/`);
  } catch (err) {
    res.send(err.message);
  }
});

router.get(`/:cubeId`, async (req, res) => {
  const id = req.params.cubeId;
  const cube = await getCubeById(id);

  res.render(`cube/accessory/details`, { cube });
});

router.use(`/:cubeId/accessory`, cubeAccessoryController);

router.get(`/:cubeId/edit`, (req, res) => {
  res.render(`cube/edit`);
});

router.get(`/:cubeId/delete`, (req, res) => {
  res.render(`cube/delete`);
});

module.exports = router;
