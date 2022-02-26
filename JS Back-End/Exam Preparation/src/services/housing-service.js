const Housing = require(`../models/Housing`);

const getAll = () => Housing.find().lean();

const create = (housingData) => Housing.create(housingData);

const getLastThree = () =>
  Housing.find().sort({ createdAt: -1 }).limit(3).lean();

const getOne = (housingId) => Housing.findById(housingId).populate(`tenants`);

const addTenant = async (housingId, tenantId) =>
  Housing.findOneAndUpdate(
    { _id: housingId },
    {
      $push: {
        tenants: tenantId,
      },
      $inc: {
        availablePieces: -1,
      },
    }
  );

module.exports = { create, getLastThree, getAll, getOne, addTenant };
