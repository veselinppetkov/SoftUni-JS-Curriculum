const { Router } = require(`express`);
const router = Router();

const { getAllCubes, searchCube } = require(`../services/cubeService`);

router.get(`/`, (req, res) => {
  const cubes = getAllCubes();
  res.render(`index`, { cubes });
});

router.get(`/about`, (req, res) => {
  res.render(`about`);
});

router.get(`/search`, (req, res) => {
  const { search, from, to } = req.query;

  let cubes = searchCube(search, from, to);

  res.render(`index`, { cubes });
});

module.exports = router;
