import { logout } from "./api/data.js";
import { page, render } from "./lib.js";
import { getUserData } from "./util.js";
import { catalogPage } from "./views/catalog.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { searchPage } from "./views/search.js";

const root = document.getElementById(`main-content`);
const logoutBtn = document.getElementById(`logoutBtn`);
logoutBtn.addEventListener("click", onLogout);

page(decorateContext);
page(`/`, homePage);
page(`/catalog`, catalogPage);
page(`/login`, loginPage);
page(`/register`, registerPage);
page(`/create`, createPage);
page(`/details/:id`, detailsPage);
page(`/edit/:id`, editPage);
page(`/search`, searchPage);

updateUserNav();
page.start();

function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, root);
  ctx.updateUserNav = updateUserNav;
  next();
}

function updateUserNav() {
  const userData = getUserData();

  if (userData) {
    [...document.querySelectorAll(`.user`)].forEach(
      (e) => (e.style.display = "inline-block")
    );
    [...document.querySelectorAll(`.guest`)].forEach(
      (e) => (e.style.display = "none")
    );
  } else {
    [...document.querySelectorAll(`.user`)].forEach(
      (e) => (e.style.display = "none")
    );
    [...document.querySelectorAll(`.guest`)].forEach(
      (e) => (e.style.display = "inline-block")
    );
  }
}

function onLogout() {
  logout();
  updateUserNav();
  page.redirect(`/`);
}
