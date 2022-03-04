const { Router } = require(`express`);
const router = Router();

router.get(`/:productId`, (req, res) => {
  res.send(`Product page >> ${req.params}`);
});

router.get(`/details/:id`, (req, res) => {
  let { id } = req.params;
  res.send(`You have got this id >>> ${id}`);
});

router.get(`/`, (req, res) => {
  res.send(`This is catalog's page`);
});

router.get(`/:category/:productId`, (req, res) => {
  res.send(`This is product ${req.params} from category`);
});

module.exports = router;
