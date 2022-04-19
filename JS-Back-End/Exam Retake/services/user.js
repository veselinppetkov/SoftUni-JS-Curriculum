const User = require("../models/User");
const { compare, hash } = require("bcrypt");

async function register(email, password, firstName, lastName) {
  const existing = await getUserByEmail(email);

  if (existing) {
    throw new Error(`Email already exists!`);
  }

  const hashedPassword = await hash(password, 10);

  const user = new User({
    email,
    hashedPassword,
    firstName,
    lastName,
  });

  await user.save();

  return user;
}

async function login(email, password) {
  const user = await getUserByEmail(email);

  if (!user) {
    throw new Error(`Email or password invalid`);
  }

  const hasMatch = await compare(password, user.hashedPassword);

  if (!hasMatch) {
    throw new Error(`Email or password invalid`);
  }

  return user;
}

async function getUserByEmail(email) {
  const user = User.findOne({ email: new RegExp(`^${email}$`, "i") });
  return user;
}

module.exports = {
  login,
  register,
};
