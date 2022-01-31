const express = require(`express`);

const router = express.Router();

router.get(`/create`, (req, res) => {
  res.render(`create`);
  console.log(req.body);
});

module.exports = router;
