// const router = require(`express`).Router();

// const {
//   create,
//   getAll,
//   getOne,
//   addTenant,
// } = require(`../services/housing-service`);

// router.get(`/`, async (req, res) => {
//   const housings = await getAll();

//   res.render("housing", { housings });
// });

// router.get(`/create`, (req, res) => {
//   res.render(`housing/create`);
// });

// router.post(`/create`, async (req, res) => {
//   await create({ ...req.body, owner: res.locals.user._id });

//   res.redirect(`/housing`);
// });

// router.get(`/:housingId/details`, async (req, res) => {
//   const housing = await getOne(req.params.housingId);
//   const housingData = await housing.toObject();

//   const isOwner = housingData.owner == res.locals.user?._id;

//   const tenants = housing.getTenants();

//   const isAvailable = housing.availablePieces > 0;
//   const isRented = housing.tenants.some((x) => x._id == res.locals.user?._id);

//   res.render(`housing/details`, {
//     ...housingData,
//     isOwner,
//     tenants,
//     isAvailable,
//     isRented,
//   });
// });

// router.get(`/:housingId/rent`, async (req, res) => {
//   await addTenant(req.params.housingId, req.user._id);

//   res.redirect(`/housing/${req.params.housingId / details}`);
// });

// module.exports = router;
