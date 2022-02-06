const express = require(`express`);
const router = express.Router();

router.get(`/create`, (req, res) => {
  res.render(`accessory/create`);
});

router.post(`/create`, async (req, res) => {
  const { name, description, imageUrl } = req.query;
});

module.exports = router;
