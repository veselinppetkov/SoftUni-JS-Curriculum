const { Schema, model } = require("mongoose");

const EMAIL_PATTERN = /^[a-zA-Z]+\@[a-zA-Z]+\.[a-zA-Z]+$/gm;

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    validate: {
      validator(value) {
        return EMAIL_PATTERN.test(value);
      },
      message: "Email must be valid and may contain only english letters",
    },
  },
  hashedPassword: {
    type: String,
    required: true,
    minlength: [5, "Password must be at least 5 chars long"],
  },
  firstName: {
    type: String,
    minlength: [1, "First name must be at least 1 char long"],
  },
  lastName: {
    type: String,
    minlength: [1, "Last name must be at least 1 char long"],
  },
});

userSchema.index(
  { email: 1 },
  {
    unique: true,
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);

const User = model("User", userSchema);

module.exports = User;
