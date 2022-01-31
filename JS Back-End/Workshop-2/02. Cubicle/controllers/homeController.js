const { Router } = require(`express`);
const router = Router();

const cubeService = require(`../services/cubeService`);

router.get(`/`, (req, res) => {
  const cubes = cubeService.getAll();
  res.render(`index`, { cubes });
});

router.get(`/about`, (req, res) => {
  res.render(`about`);
});

module.exports = router;
