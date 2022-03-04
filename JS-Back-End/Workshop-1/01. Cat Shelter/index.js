const express = require(`express`);
const app = express();

const { create } = require(`express-handlebars`);
const hbs = create({ extname: ".hbs" });

app.engine(`.hbs`, hbs.engine);
app.set(`view engine`, `.hbs`);

app.get(`/`, (req, res) => {
  res.render(`home`);
});

app.get(`/add-breed`, (req, res) => {
  res.render(`addBreed`);
});

app.get(`/add-cat`, (req, res) => {
  res.render(`addCat`);
});

app.use(express.static(`./public`));

app.listen(3000);
