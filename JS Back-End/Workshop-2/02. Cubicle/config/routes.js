const express = require(`express`);
const router = express.Router();

const cubeController = require(`../controllers/cubeController.js`);
const homeController = require(`../controllers/homeController.js`);
const errorController = require(`../controllers/errorController.js`);
const accessoryController = require(`../controllers/accessoryController.js`);
const authController = require(`../controllers/authController.js`);

router.use(express.static(`static`));
router.use(express.urlencoded({ extended: true }));

router.use(homeController);
router.use(`/cube`, cubeController);
router.use(`/accessory`, accessoryController);
router.use(authController);
router.use(errorController);

module.exports = router;
