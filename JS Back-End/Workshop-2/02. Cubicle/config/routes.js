const express = require(`express`);
const router = express.Router();

const cubeController = require(`../controllers/cubeController.js`);
const homeController = require(`../controllers/homeController.js`);

router.use(cubeController);
router.use(homeController);

module.exports = router;
