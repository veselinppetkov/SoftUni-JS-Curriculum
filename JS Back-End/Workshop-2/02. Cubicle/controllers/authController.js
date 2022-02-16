const express = require(`express`);
const router = express.Router();

const cookie = require("cookie-parser");
const { COOKIE_TOKEN } = require(`../constants`);

const authService = require(`../services/authService`);

router.get(`/login`, (req, res) => {
  res.render(`auth/login`);
});

router.post(`/login`, async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await authService.login(username, password);
    const token = await authService.createToken(user);

    res.cookie(COOKIE_TOKEN, token, {
      httpOnly: true,
    });

    res.redirect(`/`);
  } catch (error) {
    res.redirect(`/404`);
  }
});

router.get(`/register`, (req, res) => {
  res.render(`auth/register`);
});

router.post(`/register`, async (req, res) => {
  try {
    const { username, password, repeatPassword } = req.body;

    await authService.register(username, password);

    res.redirect(`/login`);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
