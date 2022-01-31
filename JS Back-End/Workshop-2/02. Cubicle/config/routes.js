const { Router } = require(`express`);
const router = Router();

const cubeController = require(`../controllers/cubeController.js`);
const homeController = require(`../controllers/homeController.js`);
const errorController = require(`../controllers/errorController.js`);

router.use(homeController);
router.use(`/cube`, cubeController);
router.use(errorController);

module.exports = router;
