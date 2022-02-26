const User = require(`../models/User`);

const jwt = require(`jsonwebtoken`);
const { JWT_SECRET } = require(`../constants`);

const login = async ({ email, password, description }) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error(`Invalid username or password`);
  }

  const isValid = await user.validatePassword(password);

  if (!isValid) {
    throw new Error(`Invalid username or password`);
  }

  const payload = {
    _id: user._id,
    email: user.name,
    description: user.description,
  };

  try {
    const token = await jwt.sign(payload, JWT_SECRET);

    return token;
  } catch (error) {
    res.render(`auth/login`, { error: error.message });
  }
};

const register = (userData) => {
  User.create(userData);
};

module.exports = { login, register };
