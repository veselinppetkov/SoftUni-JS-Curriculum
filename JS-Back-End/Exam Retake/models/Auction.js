const {
  Schema,
  model,
  Types: { ObjectId },
} = require("mongoose");

const URL_PATTERN = /^https?:\/\/(.+)/;

const auctionSchema = new Schema({
  title: {
    type: String,
    minlength: [4, "Title must be at least 4 chars long"],
  },
  description: {
    type: String,
    maxlength: [200, "Description must be at most 200 chars long"],
  },
  category: {
    type: String,
    enum: ["estate", "vehicles", "furniture", "electronics", "other"],
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
    validate: {
      validator(value) {
        return URL_PATTERN.test(value);
      },
      message: "Image must be a valid URL",
    },
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  author: { type: ObjectId, ref: "User", required: true },
  bidders: { type: [ObjectId], ref: "User", default: [] },
});

const Auction = model("Auction", auctionSchema);

module.exports = Auction;
