const router = require(`express`).Router();

const { getAll } = require(`../services/housing-service`);

router.get(`/`, async (req, res) => {
  const housings = await getAll();
  res.render(`home`, { housings });
});

module.exports = router;
