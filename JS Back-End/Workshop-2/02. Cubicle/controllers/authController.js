const express = require(`express`);
const router = express.Router();

const authService = require(`../services/authService`);

router.get(`/login`, (req, res) => {
  res.render(`auth/login`);
});

router.post(`/login`, async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await authService.login(username, password);
    const token = authService.createToken(user);

    console.log(user, token);

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
