const User = require(`../models/User.js`);

const bcrypt = require(`bcrypt`);
const jwt = require(`jsonwebtoken`);
const util = require(`util`);

const { SECRET } = require(`../constants`);

const register = function (username, password) {
  return User.create({ username, password });
};

const login = function (username, password) {
  return User.findOne({ username })
    .then((user) =>
      Promise.all([bcrypt.compare(password, user.password), user])
    )
    .then(([isValid, user]) => {
      if (isValid) {
        return user;
      } else {
        throw { message: `Cannot find username or password` };
      }
    })
    .catch(() => null);
};

const createToken = function (user) {
  let payload = {
    _id: user._id,
    username: user.username,
  };

  const jwtAsPromise = util.promisify(jwt.sign);

  return jwtAsPromise(payload, SECRET);
};

const authService = {
  register,
  login,
  createToken,
};

module.exports = authService;
