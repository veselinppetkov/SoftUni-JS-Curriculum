const express = require(`express`);
const {
  createCube,
  getCubeById,
  deleteById,
  updateById,
} = require("../services/cubeService");
const cubeAccessoryController = require(`./cubeAccessoryController`);

const router = express.Router();

const { isAuth } = require(`../middlewares/authMiddleware`);

router.get(`/create`, (req, res) => {
  res.render(`cube/create`);
});

router.post(`/create`, isAuth, async (req, res) => {
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

router.get(`/:cubeId/edit`, isAuth, async (req, res) => {
  let cube = await getCubeById(req.params.cubeId);

  res.render(`cube/edit`, cube);
});

router.post(`/:cubeId/edit`, isAuth, async (req, res) => {
  let { name, description, imageUrl, difficultyLevel } = req.body;

  await updateById(req.params.cubeId, {
    name,
    description,
    imageUrl,
    difficultyLevel,
  });

  res.redirect(`/cube/${req.params.cubeId}`);
});

router.get(`/:cubeId/delete`, isAuth, async (req, res) => {
  let cube = await getCubeById(req.params.cubeId);
  res.render(`cube/delete`, cube);
});

router.post(`/:cubeId/delete`, isAuth, async (req, res) => {
  await deleteById(req.params.cubeId);

  res.redirect(`/`);
});

module.exports = router;
