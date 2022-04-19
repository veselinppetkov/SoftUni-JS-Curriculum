const { Router } = require("express");
const router = Router();

const { isUser, isGuest } = require("../middleware/guards");
const { register, login } = require("../services/user");
const { mapErrors } = require("../util/mappers");

router.get("/register", isGuest(), (req, res) => {
  res.render("register", { title: "Register Page" });
});

router.post("/register", isGuest(), async (req, res) => {
  try {
    if (req.body.password.trim() == "") {
      throw new Error(`Password is required`);
    }
    if (req.body.password.trim() != req.body.repass.trim()) {
      throw new Error(`Passwords don\'t match`);
    }

    const user = await register(
      req.body.email.trim(),
      req.body.password.trim(),
      req.body.firstName.trim(),
      req.body.lastName.trim()
    );
    req.session.user = user;
    res.redirect("/");
  } catch (err) {
    console.error(err);
    const errors = mapErrors(err);
    const data = {
      email: req.body.email.trim(),
      firstName: req.body.firstName.trim(),
      lastName: req.body.lastName.trim(),
    };
    res.render("register", {
      data,
      errors,
      title: "Register Page",
    });
  }
});

router.get("/login", isGuest(), (req, res) => {
  res.render("login", { title: "Login Page" });
});

router.post("/login", isGuest(), async (req, res) => {
  try {
    const user = await login(req.body.email.trim(), req.body.password.trim());
    req.session.user = user;
    res.redirect("/");
  } catch (err) {
    console.log(err);
    const errors = mapErrors(err);

    const data = { email: req.body.email.trim() };

    res.render("login", {
      data,
      errors,
      title: "Login Page",
    });
  }
});

router.get("/logout", isUser(), (req, res) => {
  delete req.session.user;
  res.redirect("/");
});

module.exports = router;
