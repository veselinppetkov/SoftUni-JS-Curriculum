window.addEventListener("load", async () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", onRegister);
});

async function onRegister(e) {
  e.preventDefault();
  const url = `http://localhost:3030/users/register`;

  const form = e.target;
  const data = new FormData(form);

  const email = data.get("email").trim();
  const password = data.get("password").trim();
  const repeat = data.get("rePass").trim();

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, repeat }),
  });
  const result = await res.json();

  const token = result.accessToken;
  sessionStorage.setItem("tokenCopy", token);
  window.location = "/index.html";
}
