const express = require(`express`);
const { create } = require("../services/cubeService");

const router = express.Router();

router.get(`/create`, (req, res) => {
  res.render(`create`);
});

router.post(`/create`, (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;

  create(name, description, imageUrl, difficultyLevel);
  res.redirect(`/`);
});

module.exports = router;
