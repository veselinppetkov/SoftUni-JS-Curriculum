const express = require(`express`);
const router = express.Router();

const { createAccessory } = require(`../services/accessoryService`);

router.get(`/create`, (req, res) => {
  res.render(`accessory/create`);
});

router.post(`/create`, async (req, res) => {
  const { name, description, imageUrl } = req.body;

  try {
    await createAccessory(name, description, imageUrl);
    res.redirect(`/`);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
