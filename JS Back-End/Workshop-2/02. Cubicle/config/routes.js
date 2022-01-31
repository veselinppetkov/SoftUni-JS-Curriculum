const express = require(`express`);
const router = express.Router();

const cubeController = require(`../controllers/cubeController.js`);
const homeController = require(`../controllers/homeController.js`);
const errorController = require(`../controllers/errorController.js`);

router.use(express.static(`static`));
router.use(express.urlencoded());

router.use(homeController);
router.use(`/cube`, cubeController);
router.use(errorController);

module.exports = router;
