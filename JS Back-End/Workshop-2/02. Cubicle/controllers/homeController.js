const { Router } = require(`express`);
const router = Router();

const { getAllCubes } = require(`../services/cubeService`);

router.get(`/`, (req, res) => {
  const cubes = getAllCubes();
  res.render(`index`, { cubes });
});

router.get(`/about`, (req, res) => {
  res.render(`about`);
});

module.exports = router;
