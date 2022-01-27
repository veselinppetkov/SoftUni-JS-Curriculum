const app = require(`express`)();
const handlebars = require(`express-handlebars`);

const hbs = handlebars.create({ extname: ".hbs" });

app.engine(`.hbs`, hbs.engine);
app.set(`view engine`, `.hbs`);

const people = [{ name: "Ivan" }, { name: "Gogo" }, { name: "Pavel" }];

app.get(`/`, (req, res) => {
  res.locals = { people };
  res.render(`home`, { layout: false });
});

app.listen(3000);
