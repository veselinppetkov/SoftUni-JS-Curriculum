import { updateNav } from "./app.js";

import { showView } from "./dom.js";
import { showHome } from "./home.js";

const section = document.getElementById(`form-sign-up`);
const form = section.querySelector(`form`);
form.addEventListener(`submit`, onRegister);
section.remove();

export function showRegister() {
  showView(section);
}

async function onRegister(event) {
  event.preventDefault();
  const formData = new FormData(form);

  const email = formData.get(`email`).trim();
  const password = formData.get(`password`).trim();
  const repass = formData.get(`repeatPassword`).trim();

  try {
    if (email == "") {
      return alert("Email input must be filled!");
    } else if (password.length < 6) {
      return alert("Password should be at least 6 characters long!");
    } else if (password != repass) {
      return alert("Passwords don't match!");
    }

    const res = await fetch(`http://localhost:3030/users/register`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok != true) {
      const error = await res.json();
      throw new Error(error.message);
    }

    alert("Successfully registered!");
    form.reset();
    updateNav();
    showHome();
  } catch (err) {
    alert(err.message);
  }
}
