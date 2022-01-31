const env = process.env.NODE_ENV || "development";

const config = require("./config/config")[env];
const handlebars = require(`express-handlebars`);
const express = require("express");
const app = express();

require("./config/express")(app);
require("./config/routes")(app);

app.engine(`hbs`, handlebars({ extname: "hbs" }));
app.set(`view engine`, `hbs`);
app.use(express.static(`static`));

app.get(`/`, (req, res) => {
  res.render(`index`);
});

app.get(`*`, (req, res) => {
  res.render(`404`);
});

app.listen(config.port, console.log(`Listening on port ${config.port}!`));
