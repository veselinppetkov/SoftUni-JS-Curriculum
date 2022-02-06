const { Router } = require(`express`);
const router = Router();

const { getAllCubes, searchCube } = require(`../services/cubeService`);

router.get(`/`, async (req, res) => {
  const cubes = await getAllCubes();

  res.render(`index`, { cubes });
});

router.get(`/about`, (req, res) => {
  res.render(`about`);
});

router.get(`/search`, async (req, res) => {
  const { search, from, to } = req.query;

  const cubes = await searchCube(search, from, to);

  res.render(`index`, { cubes });
});

module.exports = router;
