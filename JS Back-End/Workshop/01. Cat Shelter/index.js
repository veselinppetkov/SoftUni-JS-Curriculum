const http = require(`http`);
const fs = require(`fs`);

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      let content = fs.readFileSync(`./views/home/index.html`);
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.write(content);
      res.end();
      break;

    case "/styles/site.css":
      let css = fs.readFileSync(`./styles/site.css`);
      res.writeHead(200, {
        "Content-Type": "text/css",
      });
      res.write(css);
      res.end();
      break;

    case "/js/script.js":
      let js = fs.readFileSync(`./js/script.js`);
      res.writeHead(200, {
        "Content-Type": "text/javascript",
      });
      res.write(js);
      res.end();
      break;

    default:
      res.statusCode = 404;
      break;
  }
});

server.listen(3000);
