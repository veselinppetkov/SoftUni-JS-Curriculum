const express = require(`express`);

const { PORT } = require(`./constants`);
const initDb = require(`./config/db-config`);

const app = express();

require(`./config/express-config`)(app);
require(`./config/hbs-config`)(app);

const routes = require(`./config/routes`);
app.use(routes);

initDb()
  .then(() => {
    app.listen(PORT, () => console.log(`It works properly on port: ${PORT}`));
  })
  .catch((err) => {
    console.log(`Cannot connect properly`, err.message);
  });
