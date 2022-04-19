const { Router } = require("express");
const { isUser } = require("../middleware/guards");
const { getPosts, getPostById, getPostsByAuthor } = require("../services/post");
const { postViewModel } = require("../util/mappers");
const router = Router();

router.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

router.get("/catalog", async (req, res) => {
  const posts = (await getPosts()).map(postViewModel);
  res.render("catalog", { title: "Catalog Page", posts });
});

router.get("/catalog/:id", async (req, res) => {
  const id = req.params.id;
  const post = postViewModel(await getPostById(id));

  if (req.session.user) {
    post.hasUser = true;
    if (req.session.user._id == post.author._id) {
      post.isAuthor = true;
    } else {
      post.hasVoted = post.votes.find(
        (v) => (v._id == req.session.user._id) != undefined
      );
    }
  }

  res.render("details", { title: post.title, post });
});

router.get("/profile", isUser(), async (req, res) => {
  const id = req.session.user._id;
  const posts = (await getPostsByAuthor(id)).map(postViewModel);
  res.render("profile", { title: "Profile Page", posts });
});

module.exports = router;
