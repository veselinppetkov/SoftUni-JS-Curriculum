const express = require(`express`);
const app = express();
const uniqid = require(`uniqid`);
const jwt = require(`jsonwebtoken`);

const fs = require(`fs/promises`);

const cookieParser = require(`cookie-parser`);
app.use(cookieParser());

const session = require(`express-session`);
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "shitisasecret",
  })
);

const bcrypt = require(`bcrypt`);

app.use(express.urlencoded({ extended: true }));

// Custom cookie
app.get(`/`, (req, res) => {
  res.header({
    "content-type": "text/html",
    "Set-Cookie": "username=vesko36",
  });

  fs.readFile("./home.html").then((html) => res.send(html));
});

// Cookie Parser
app.get(`/cookie`, (req, res) => {
  res.cookie(`test`, `test-passsword`, { httpOnly: true });

  res.send(req.cookies);
});

// Session
app.get(`/set-session/:name`, (req, res) => {
  req.session.user = req.params.name;
  res.send(`Session set`);
});

app.get(`/get-session`, (req, res) => {
  res.send(`Session got` + " " + req.session.user);
});

// Bcrypt
app.get(`/bcrypt`, (req, res) => {
  let password = "azsymgotin";
  let saltRounds = 9;

  bcrypt
    .genSalt(saltRounds)
    .then((salt) => {
      return bcrypt.hash(password, salt);
    })
    .then((hash) => {
      res.send(hash);
    });
});

app.get(`/bcrypt/verify/:password`, (req, res) => {
  let hashedPass =
    "$2b$09$iRXyKHbihm.iEIqPA8tdueH1cDr84HlQpEtN7asFG2U9MAksuq2Py";

  bcrypt.compare(req.params.password, hashedPass).then((result) => {
    res.send(result);
  });
});

app.get(`/token/create/:password`, (req, res) => {
  let payload = {
    id: uniqid(),
    password: req.params.password,
  };
  let secret = "gigamegaultrasecret";

  let token = jwt.sign(payload, secret, { expiresIn: "1h" });

  res.cookie(`jwt`, token);

  res.send(token);
});

app.listen(3000);
