const router = require(`express`).Router();

const homeController = require(`../controllers/home-controller`);
const authController = require(`../controllers/auth-controller`);
const adController = require(`../controllers/ad-controller`);
// + Other controllers

router.use(homeController);
router.use(`/auth`, authController);
router.use(`/ad`, adController);
router.use(`*`, (req, res) => {
  res.render(`404`);
});

module.exports = router;
