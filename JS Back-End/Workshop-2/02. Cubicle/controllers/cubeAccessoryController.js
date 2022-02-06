const express = require(`express`);
const router = express.Router({ mergeParams: true });

const { getCubeById, attachAccessory } = require(`../services/cubeService`);
const { getAllWithout } = require(`../services/accessoryService`);

router.get(`/add`, async (req, res) => {
  const cube = await getCubeById(req.params.cubeId);
  const accessories = await getAllWithout(cube.accessories.map((x) => x._id));

  res.render(`cube/accessory/add`, { cube, accessories });
});

router.post(`/add`, async (req, res) => {
  const cubeId = req.params.cubeId;

  await attachAccessory(cubeId, req.body.accessory);

  res.redirect(`/cube/${cubeId}`);
});

module.exports = router;
