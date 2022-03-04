const Ad = require(`../models/Ad`);

const getAllAds = () => Ad.find().lean();

const createAd = (adData) => Ad.create(adData);

const getLastThree = () => {
  Ad.find().sort({ createAd: -1 }).limit(3).lean();
};

const getAdById = (adId) => Ad.findById(adId).populate(`usersApplied`);

const addApplicant = async (adId, applicantId) => {
  Ad.findOneAndUpdate(
    { _id: adId },
    {
      $push: {
        usersApplied: applicantId,
      },
      $inc: {
        availablePieces: 1,
      },
    }
  );
};

const removeAd = (adId) => Ad.findByIdAndDelete(adId);

const updateById = (adId, adData) => Ad.findByIdAndUpdate(adId, adData);

const search = (text) =>
  Ad.find({ type: { $regex: text, $options: "i" } }).lean();

module.exports = {
  getAllAds,
  getLastThree,
  getAdById,
  createAd,
  addApplicant,
  removeAd,
  updateById,
  search,
};
