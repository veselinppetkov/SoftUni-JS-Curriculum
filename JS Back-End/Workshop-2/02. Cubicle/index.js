const env = process.env.NODE_ENV || "development";
const config = require("./config/config")[env];

const express = require("express");
const app = express();

const routes = require("./config/routes");

require("./config/express")(app);

app.use(express.static(`static`));
app.use(routes);

app.listen(config.port);
