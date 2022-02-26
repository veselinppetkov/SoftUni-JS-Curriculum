const jwt = require(`../utils/jwt`);
const { AUTH_COOKIE_NAME, JWT_SECRET } = require(`../constants`);

const auth = function (req, res, next) {
  const token = req.cookies[AUTH_COOKIE_NAME];

  if (token) {
    jwt
      .verify(token, JWT_SECRET)
      .then((decodedToken) => {
        res.locals.user = decodedToken;
        next();
      })
      .catch((err) => {
        res.clearCookie(AUTH_COOKIE_NAME);
        res.redirect(`/auth/login`);
      });
  } else {
    next();
  }
};

const isAuth = function (req, res, next) {
  if (req.user) {
    next();
  } else {
    res.redirect(`/auth/login`);
  }
};

module.exports = { auth, isAuth };
