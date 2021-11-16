import { showDetails } from "./details.js";
import { showView } from "./dom.js";
import { showHome } from "./home.js";
import { showLogin } from "./login.js";

const section = document.getElementById(`add-movie`);
const userData = JSON.parse(localStorage.getItem(`userData`));
const form = section.querySelector(`form`);
form.addEventListener(`submit`, onSubmit);
section.remove();

export function showCreate() {
  showView(section);
}

async function onSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);

  const title = formData.get(`title`).trim();
  const description = formData.get(`description`).trim();
  const img = formData.get(`imageUrl`).trim();

  try {
    if (title == "" || description == "" || img == "") {
      alert(`All fiedls are required!`);
      return;
    }
    const res = await fetch("http://localhost:3030/data/movies", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": userData.token,
      },
      body: JSON.stringify({ title, description, img }),
    });

    if (res.ok != true) {
      const error = await res.json();
      throw new Error(error.message);
    }

    const movie = await res.json();
    showDetails(movie._id);

    showHome();
    form.reset();
  } catch (err) {
    alert(`You must login first!`);
    form.reset();
    showLogin();
  }
}
