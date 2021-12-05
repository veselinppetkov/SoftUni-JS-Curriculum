async function attachEvents() {
  const submitBtn = document.getElementById(`submit`);
  submitBtn.addEventListener("click", onSubmit);

  const refreshBtn = document.getElementById(`refresh`);
  refreshBtn.addEventListener("click", getData);

  getData();
}
attachEvents();

const textArea = document.getElementById(`messages`);
const authorInput = document.querySelector(`[name="author"]`);
const contentInput = document.querySelector(`[name="content"]`);

async function getData() {
  const url = `http://localhost:3030/jsonstore/messenger`;
  const res = await fetch(url);
  const data = await res.json();
  const messages = Object.values(data);

  textArea.value = messages.map((m) => `${m.author}: ${m.content}`).join("\n");
}

async function onSubmit() {
  const author = authorInput.value;
  const content = contentInput.value;

  await createMessage({ author, content });

  contentInput.value = "";
  textArea.value += `\n${author}: ${content}`;
}

async function createMessage(message) {
  const url = `http://localhost:3030/jsonstore/messenger`;

  const res = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });

  const result = await res.json();
  return result;
}
