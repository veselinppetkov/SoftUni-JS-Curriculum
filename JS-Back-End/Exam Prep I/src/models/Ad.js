const mongoose = require(`mongoose`);

const adSchema = new mongoose.Schema(
  {
    headline: {
      type: String,
      required: true,
      minlength: 4,
    },
    location: {
      type: String,
      required: true,
      minlength: 8,
    },
    companyName: {
      type: String,
      required: true,
      minlength: 3,
    },
    companyDescription: {
      type: String,
      required: true,
      maxlength: 40,
    },
    author: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    usersApplied: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

adSchema.method(`getAppliedUsers`, function () {
  return this.usersApplied.map((x) => x.name).join(", ");
});

const Ad = mongoose.model(`Ad`, adSchema);

module.exports = Ad;
