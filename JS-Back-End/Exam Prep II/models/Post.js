const {
  Schema,
  model,
  Types: { ObjectId },
} = require("mongoose");

const URL_PATTERN =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

const postSchema = new Schema({
  title: {
    type: String,
    minlength: [6, "Title must be at least 6 chars long"],
  },
  keyword: {
    type: String,
    minlength: [6, "Keyword must be at least 6 chars long"],
  },
  location: {
    type: String,
    maxlength: [15, "Location must be at most 15 chars long"],
  },
  date: {
    type: String,
    minlength: [10, "Date must be at least 10 chars long"],
    maxlength: [10, "Location must be at most 10 chars long"],
  },
  image: {
    type: String,
    validate: {
      validator(value) {
        return URL_PATTERN.test(value);
      },
      message: "Image must be a valid URL",
    },
  },
  description: {
    type: String,
    minlength: [8, "Keyword must be at least 8 chars long"],
  },
  author: { type: ObjectId, ref: "User", required: true },
  votes: { type: [ObjectId], ref: "User", default: [] },
  rating: { type: Number, default: 0 },
});

const Post = model("Post", postSchema);

module.exports = Post;
