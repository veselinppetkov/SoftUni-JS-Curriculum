import { register } from "../api/api.js";

const section = document.getElementById(`registerPage`);
section.remove();
const form = section.querySelector(`form`);
form.addEventListener(`submit`, onRegister);
let ctx = null;

export async function showRegisterPage(ctxTarget) {
  ctx = ctxTarget;
  ctx.showSection(section);
}

async function onRegister(event) {
  event.preventDefault();
  const formData = new FormData(form);

  const email = formData.get(`email`).trim();
  const password = formData.get(`password`).trim();
  const repeatPassword = formData.get(`repeatPassword`).trim();

  if (!email || !password) {
    return alert(`All fields are required!`);
  }

  if (password != repeatPassword) {
    return alert(`Passwords don't match!`);
  }

  if (email.length < 3) {
    return alert("Email should be at least 3 characters long!");
  }

  if (password.length < 3) {
    return alert("Password should be at least 3 characters long!");
  }

  await register(email, password);

  form.reset();

  ctx.goTo("home");
  ctx.updateNav();
}
