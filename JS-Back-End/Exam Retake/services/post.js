const Auction = require("../models/Auction");

async function createPost(post) {
  const result = new Auction(post);
  await result.save();

  return result;
}

async function getPosts() {
  return Auction.find({});
}

async function getPostById(id) {
  return Auction.findById(id)
    .populate("author", "firstName lastName")
    .populate("bidders", "firstName lastName");
}

async function updatePost(id, post) {
  const existing = await Auction.findById(id);

  (existing.title = post.title),
    (existing.category = post.category),
    (existing.imageURL = post.imageURL),
    (existing.price = post.price),
    (existing.description = post.description);

  await existing.save();
}

async function deletePost(id) {
  return Auction.findByIdAndDelete(id);
}

async function bidPost(id, userId, value) {
  const post = await Auction.findById(id);

  if (post.bidders.includes(userId)) {
    throw new Error("User has already bidded!");
  }

  post.bidders.push(userId);
  if (value <= post.price) {
    throw new Error(`Bid must be higher then the current value`);
  }
  post.price = value;

  await post.save();
}

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
  bidPost,
};
