window.addEventListener("load", async () => {
  const token = localStorage.getItem(`token`);
  if (token == null) {
    window.location = "/login.html";
  }
  const form = document.querySelector("form");
  form.addEventListener("submit", onCreate);
});

async function onCreate(ev) {
  const url = `http://localhost:3030/data/recipes`;
  ev.preventDefault();
  const form = ev.target;
  const formData = new FormData(form);

  const name = formData.get("name").trim();
  const img = formData.get("img");
  const ingredients = formData.get("ingredients").split("\n");
  const steps = formData.get("steps").split("\n");

  const token = localStorage.getItem(`token`);
  if (token == null) {
    window.location = "/login.html";
    return;
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": token,
      },
      body: JSON.stringify({ name, img, ingredients, steps }),
    });

    if (res.ok != true) {
      const err = await res.json();
      throw new Error(err.message);
    }

    await res.json();
    window.location = "/index.html";
  } catch (err) {
    alert(err.message);
  }
}
