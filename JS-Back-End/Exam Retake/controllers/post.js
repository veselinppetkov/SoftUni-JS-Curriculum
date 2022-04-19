const { Router } = require("express");
const { isUser } = require("../middleware/guards");
const {
  createPost,
  getPostById,
  updatePost,
  deletePost,
  bidPost,
} = require("../services/post");
const { mapErrors, postViewModel } = require("../util/mappers");
const router = Router();

router.get("/create", isUser(), (req, res) => {
  res.render("create", { title: "Create Post" });
});

router.post("/create", isUser(), async (req, res) => {
  const userId = req.session.user._id;
  const post = {
    title: req.body.title.trim(),
    category: req.body.category.trim(),
    imageURL: req.body.imageURL,
    price: req.body.price,
    description: req.body.description.trim(),
    author: userId,
  };

  try {
    await createPost(post);
    res.redirect("/browse");
  } catch (err) {
    console.error(err);
    const errors = mapErrors(err);
    res.render("create", { title: "Create Post", errors, data: post });
  }

  res.render("create", { title: "Create Post" });
});

router.get("/edit/:id", isUser(), async (req, res) => {
  const id = req.params.id;
  const post = postViewModel(await getPostById(id));

  if (req.session.user._id != post.author._id) {
    return res.redirect("/login");
  }

  res.render("edit", { title: "Edit Post", post });
});

router.post("/edit/:id", isUser(), async (req, res) => {
  const id = req.params.id;
  const existing = postViewModel(await getPostById(id));

  if (req.session.user._id != existing.author._id) {
    return res.redirect("/login");
  }

  const post = {
    title: req.body.title.trim(),
    category: req.body.category.trim(),
    imageURL: req.body.imageURL,
    price: req.body.price,
    description: req.body.description.trim(),
  };

  try {
    await updatePost(id, post);
    res.redirect("/browse/" + id);
  } catch (err) {
    console.error(err);
    const errors = mapErrors(err);
    res.render("edit", { title: "Edit Post", post, errors });
  }
});

router.get("/delete/:id", isUser(), async (req, res) => {
  const id = req.params.id;
  const post = postViewModel(await getPostById(id));

  if (req.session.user._id != post.author._id) {
    return res.redirect("/login");
  }

  try {
    await deletePost(id);
    res.redirect("/browse");
  } catch (err) {
    console.error(err);
    const errors = mapErrors(err);
    res.render("details", { title: existing.title, errors });
  }
});

router.get("/bid/:id/", isUser(), async (req, res) => {
  const id = req.params.id;
  const value = Number(req.query.bidAmount);

  try {
    await bidPost(id, req.session.user._id, value);

    res.redirect("/browse/" + id);
  } catch (err) {
    console.error(err);
    const errors = mapErrors(err);
    res.render("details", { title: "Details", errors });
  }
});

module.exports = router;
