const express = require(`express`);
const path = require(`path`);
const cookieParser = require("cookie-parser");

const { auth } = require(`../middlewares/auth-middleware`);

function expressConfig(app) {
  app.use(`/static`, express.static(path.resolve(__dirname, `../public`))); // Check if it's true or not
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(auth);
}

module.exports = expressConfig;
