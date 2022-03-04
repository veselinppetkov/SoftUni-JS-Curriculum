const express = require(`express`);
const app = express();
const logger = require(`./logger`);

const catalogRouter = require(`./catalog.js`);
const isAdmin = require("./auth");

app.use(`/catalog`, isAdmin, catalogRouter);
app.use(logger);

app.use;

app.listen(3000);
