import { showHome } from "./home.js";
import { showLogin } from "./login.js";
import { showRegister } from "./register.js";

const views = {
  homeLink: showHome,
  loginLink: showLogin,
  registerLink: showRegister,
};

const logoutBtn = document.getElementById(`logoutBtn`);
logoutBtn.addEventListener("click", onLogout);

const nav = document.querySelector(`nav`);
nav.addEventListener("click", (event) => {
  if (event.target.tagName == "A") {
    const view = views[event.target.id];
    if (typeof view == "function") {
      event.preventDefault();
      view();
    }
  }
});

export function updateNav() {
  const userData = JSON.parse(localStorage.getItem(`userData`));

  if (userData != null) {
    nav.querySelector(`#welcomeTag`).textContent = `Welcome, ${userData.email}`;
    [...nav.querySelectorAll(`.user`)].forEach(
      (e) => (e.style.display = "block")
    );
    [...nav.querySelectorAll(`.guest`)].forEach(
      (e) => (e.style.display = "none")
    );
  } else {
    [...nav.querySelectorAll(`.user`)].forEach(
      (e) => (e.style.display = "none")
    );
    [...nav.querySelectorAll(`.guest`)].forEach(
      (e) => (e.style.display = "block")
    );
  }
}

async function onLogout(event) {
  event.preventDefault();
  event.stopImmediatePropagation();

  const { token } = JSON.parse(localStorage.getItem(`userData`));

  await fetch(`http://localhost:3030/users/logout`, {
    headers: {
      "X-Authorization": token,
    },
  });

  localStorage.removeItem(`userData`);
  updateNav();
  showLogin();
}

updateNav();
showHome();
