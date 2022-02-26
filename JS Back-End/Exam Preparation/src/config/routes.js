const router = require(`express`).Router();

const homeController = require(`../controllers/home-controller`);
const authController = require(`../controllers/auth-controller`);
const housingController = require(`../controllers/housing-controller`);

router.use(homeController);
router.use(`/auth`, authController);
router.use(`/housing`, housingController);

module.exports = router;
