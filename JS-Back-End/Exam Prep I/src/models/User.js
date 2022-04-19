const mongoose = require(`mongoose`);
const bcrypt = require(`bcrypt`);

const SALT_ROUNDS = 10;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    validate: [/^[A-Za-z]+@[A-Za-z]+.[A-Za-z]+$/, `Email incorrect`],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  description: {
    type: String,
    required: true,
    maxlength: 40,
  },
  myAds: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Ad",
    },
  ],
});

userSchema.pre(`save`, function (next) {
  return bcrypt.hash(this.password, SALT_ROUNDS).then((hash) => {
    this.password = hash;

    return next();
  });
});

userSchema.method(`validatePassword`, function (password) {
  return bcrypt.compare(password, this.password);
});

const User = mongoose.model(`User`, userSchema);

module.exports = User;
