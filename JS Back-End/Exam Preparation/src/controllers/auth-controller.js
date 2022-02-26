const router = require(`express`).Router();

const { AUTH_COOKIE_NAME } = require(`../constants`);
const { register, login } = require(`../services/auth-service`);

router.get(`/login`, (req, res) => {
  res.render(`auth/login`);
});

router.post(`/login`, async (req, res) => {
  const { username, password } = req.body;

  try {
    const token = await login({ username, password });

    res.cookie(AUTH_COOKIE_NAME, token);

    res.redirect(`/`);
  } catch (error) {
    // RETURN NOTIFICATION
    console.log(err);
    res.end();
  }
});

router.get(`/register`, (req, res) => {
  res.render(`auth/register`);
});

router.post(`/register`, async (req, res) => {
  const { name, username, password, repass } = req.body;

  if (password !== repass) {
    res.locals.error = `Passwords don't match`;

    return res.render(`auth/register`);
  }

  try {
    await register({ name, username, password, repass });

    // const token = await login({ username, password });

    // res.cookie(AUTH_COOKIE_NAME, token);

    res.redirect(`/`);
  } catch (error) {
    console.log(error.message);
    res.end();
  }
});

router.get(`/logout`, (req, res) => {
  res.clearCookie(AUTH_COOKIE_NAME);
  res.redirect(`/auth/login`);
});

module.exports = router;
