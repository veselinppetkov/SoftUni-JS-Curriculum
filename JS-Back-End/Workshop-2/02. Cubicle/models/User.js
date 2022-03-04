const mongoose = require(`mongoose`);
const bcrypt = require(`bcrypt`);

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    validate: [
      /^[a-zA-Z0-9]+$/,
      `You should use only English letters and digits`,
    ],
    required: true,
    minlength: [5, `Username should be above 5 symbols`],
  },
  password: {
    type: String,
    validate: [
      /^[a-zA-Z0-9]+$/,
      `You should use only English letters and digits`,
    ],
    required: true,
    minlength: [8, `Password should be above 8 symbols`],
  },
});

userSchema.pre(`save`, function (next) {
  bcrypt.hash(this.password, 10).then((hash) => {
    this.password = hash;
    next();
  });
});

const User = mongoose.model(`User`, userSchema);

module.exports = User;
