const router = require(`express`).Router();

const {
  createAd,
  getAllAds,
  getAdById,
  addApplicant,
  removeAd,
  updateById,
  search,
} = require(`../services/ad-service`);

const { isAuth } = require(`../middlewares/auth-middleware`);

router.get(`/all-ads`, async (req, res) => {
  try {
    const ads = await getAllAds();
    res.render(`ad/all-ads`, { ads });
  } catch (error) {
    res.render(`/`, { error: error.message });
  }
});

router.get(`/create`, isAuth, async (req, res) => {
  res.render(`ad/create`);
});

router.post(`/create`, isAuth, async (req, res) => {
  try {
    await createAd({ ...req.body, author: res.locals.user._id });

    res.redirect(`/ad/all-ads`);
  } catch (error) {
    res.render(`ad/create`, { error: error.message });
  }
});

router.get(`/:adId/details`, async (req, res) => {
  try {
    const ad = await getAdById(req.params.adId);
    const adData = await ad.toObject();

    const isAuthor = adData.author == res.locals.user?._id;

    const usersApplied = ad.getAppliedUsers();

    const isApplied = ad.usersApplied.some(
      (x) => x._id == res.locals.user?._id
    );

    res.render(`ad/details`, {
      ...adData,
      isAuthor,
      usersApplied,
      isApplied,
    });
  } catch (error) {
    res.render(`:adId/details`, { error: error.message });
  }
});

router.get(`/:adId/delete`, async (req, res) => {
  try {
    await removeAd(req.params.adId);
    res.redirect(`/ad/all-ads`);
  } catch (error) {
    res.render(`/:adId/details`, { error: error.message });
  }
});

router.get(`/:adId/edit`, async (req, res) => {
  try {
    const ad = await getAdById(req.params.adId);

    res.render(`ad/edit`, { ...ad.toObject() });
  } catch (error) {
    res.render(`ad/:adId/details`, { error: error.message });
  }
});

router.post(`/:adId/edit`, async (req, res) => {
  try {
    await updateById(req.params.adId, req.body);

    res.redirect(`/ad/${req.params.adId}/details`);
  } catch (error) {
    res.render(`/`, { error: error.message });
  }
});

router.get(`/search`, async (req, res) => {
  const ad = await search(req.query.text);
  res.render(`ad/search`, { ad });
});

router.get(`/:adId/apply`, async (req, res) => {
  try {
    await addApplicant(req.params.adId.req.user._id);

    res.redirect(`/ad/${req.params.adId}/details`);
  } catch (error) {
    res.render(`/`, { error: error.message });
  }
});

module.exports = router;
