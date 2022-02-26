const User = require(`../models/User`);

const jwt = require(`jsonwebtoken`);
const { JWT_SECRET } = require(`../constants`);

const login = async ({ username, password }) => {
  const user = await User.findOne({ username });

  if (!user) {
    throw new Error(`Invalid username or password`);
  }

  const isValid = await user.validatePassword(password);

  if (!isValid) {
    throw new Error(`Invalid username or password`);
  }

  const payload = {
    _id: user._id,
    name: user.name,
    username: user.username,
  };

  try {
    const token = await jwt.sign(payload, JWT_SECRET);

    return token;
  } catch (error) {
    console.log(error.message);
  }
};

const register = (userData) => {
  User.create(userData);
};

module.exports = { login, register };
