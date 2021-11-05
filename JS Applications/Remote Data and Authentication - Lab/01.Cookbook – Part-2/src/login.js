window.addEventListener("load", async () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", onLogin);
});

async function onLogin(e) {
  const url = `http://localhost:3030/users/login`;
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  const email = data.get("email").trim();
  const password = data.get("password").trim();

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok != true) {
      const error = await res.json();
      throw new Error(error.message);
    }

    const data = await res.json();
    const token = data.accessToken;

    localStorage.setItem("token", token);

    window.location = "/index.html";
  } catch (err) {
    alert(err.message);
  }
}
