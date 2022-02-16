const env = process.env.NODE_ENV || "development";
const config = require("./config/config")[env];
const initDb = require("./config/database");

const express = require("express");
const app = express();

const cookies = require("cookie-parser");

app.use(cookies());

const { auth } = require("./middlewares/authMiddleware");

app.use(auth);
const routes = require("./config/routes");
require("./config/express")(app);

app.use(routes);

initDb(config.DB_CONNECTION_STRING)
  .then(() => {
    app.listen(config.port);
    console.log(`It is connected!`);
  })
  .catch((err) => {
    alert(err.message);
  });
