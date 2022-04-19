const router = require(`express`).Router();

const { isGuest, isAuth } = require(`../middlewares/auth-middleware`);

const { AUTH_COOKIE_NAME } = require(`../constants`);
const { register, login } = require(`../services/auth-service`);

router.get(`/login`, isGuest, (req, res) => {
  res.render(`auth/login`);
});

router.post(`/login`, isGuest, async (req, res) => {
  const { email, password } = req.body; // Check if it's true or not

  try {
    const token = await login({ email, password });

    res.cookie(AUTH_COOKIE_NAME, token);

    res.redirect(`/`);
  } catch (error) {
    res.render(`auth/login`, { error: error.message });
  }
});

router.get(`/register`, isGuest, (req, res) => {
  res.render(`auth/register`);
});

router.post(`/register`, isGuest, async (req, res) => {
  const { email, password, repass, description } = req.body;

  if (password !== repass) {
    res.locals.error = `Passwords don't match`;

    return res.render(`auth/register`);
  }

  try {
    await register({ email, password, repass, description });

    res.redirect(`/login`);
  } catch (error) {
    res.send(`auth/register`, { error: error.message });
  }
});

router.get(`/logout`, isAuth, (req, res) => {
  res.clearCookie(AUTH_COOKIE_NAME);
  res.redirect(`/`);
});

module.exports = router;
