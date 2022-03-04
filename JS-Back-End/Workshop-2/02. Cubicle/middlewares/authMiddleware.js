const { COOKIE_TOKEN, SECRET } = require(`../constants`);
const jwt = require(`jsonwebtoken`);

const auth = function (req, res, next) {
  let token = req.cookies[COOKIE_TOKEN];

  if (!token) {
    return next();
  }

  jwt.verify(token, SECRET, function (err, decodedToken) {
    if (err) {
      return res.redirect(`/login`);
    }

    req.user = decodedToken;
    next();
  });
};

const isAuth = function (req, res, next) {
  if (!req.user) {
    return res.status(401).redirect(`/login`);
  }

  next();
};

module.exports = { auth, isAuth };
