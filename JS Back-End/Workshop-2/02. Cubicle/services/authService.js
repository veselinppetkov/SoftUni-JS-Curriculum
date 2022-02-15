const User = require(`../models/User.js`);

exports.register = function (username, password) {
  return User.create({ username, password });
};
