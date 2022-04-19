const { Router } = require("express");
const { getPosts, getPostById } = require("../services/post");
const { postViewModel } = require("../util/mappers");
const router = Router();

router.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

router.get("/closed-auctions", (req, res) => {
  res.render("closed-auctions", { title: "BONUS PAGE" });
});

router.get("/browse", async (req, res) => {
  const posts = (await getPosts()).map(postViewModel);
  const isEmpty = posts.length == 0;

  res.render("browse", { title: "Browse Page", posts, isEmpty });
});

router.get("/browse/:id", async (req, res) => {
  const id = req.params.id;
  const post = postViewModel(await getPostById(id));

  if (req.session.user) {
    post.hasUser = true;
    post.canBid = true;

    if (req.session.user._id == post.author._id) {
      post.isAuthor = true;
      post.canBid = false;
    } else {
      post.hasBidded = post.bidders.find(
        (v) => (v._id == req.session.user._id) != undefined
      );
      console.log(post.hasBidded._id);
    }
  }

  res.render("details", { title: post.title, post });
});

module.exports = router;
