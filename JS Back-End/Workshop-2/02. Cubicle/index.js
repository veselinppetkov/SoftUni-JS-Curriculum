const env = process.env.NODE_ENV || "development";
const config = require("./config/config")[env];
const initDb = require("./config/database");

const express = require("express");
const app = express();

const cookie = require("cookie-parser");

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
