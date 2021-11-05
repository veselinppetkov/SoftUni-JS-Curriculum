window.addEventListener(`DOMContentLoaded`, solution);

async function solution() {
  const main = document.getElementById(`main`);
  const articles = await getArticle();

  articles.map((v) => {
    createArticle(v._id);
  });
}

async function createArticle(id) {
  const article = await getArticleById(id);

  const divAccordion = create(`div`, { className: "accordion" });
  const divHead = create(`div`, { className: "head" });
  const span = create(`span`, {}, `${article.title}`);
  divHead.appendChild(span);
  const btn = create(`button`, { className: "button", id: article.id }, `More`);
  btn.addEventListener("click", (ev) => {
    let btn = ev.target;
    const div = btn.parentNode.parentNode.querySelector(".extra");
    if (btn.textContent === "More") {
      div.style.display = "block";
      btn.textContent = "Less";
    } else {
      div.style.display = "none";
      btn.textContent = "More";
    }
  });
  divHead.appendChild(btn);
  divAccordion.appendChild(divHead);
  const divExtra = create(`div`, { className: "extra" });
  const p = create(`p`, {}, `${article.content}`);
  divExtra.appendChild(p);
  divAccordion.appendChild(divExtra);

  main.appendChild(divAccordion);
  return main;
}

async function getArticle() {
  const url = `http://localhost:3030/jsonstore/advanced/articles/list`;
  const res = await fetch(url);
  const data = await res.json();

  return Object.values(data);
}

async function getArticleById(id) {
  const url = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(`Invalid ID`);
  }
}

function create(type, attributes, ...content) {
  const element = document.createElement(type);

  for (const property in attributes) {
    element[property] = attributes[property];
  }

  for (let el of content) {
    if (typeof el === "string" || typeof el === "number") {
      if (el.startsWith("&") || Number.isInteger(Number(el[0]))) {
        element.innerHTML = el;
        continue;
      }
      el = document.createTextNode(el);
    }
    element.appendChild(el);
  }
  return element;
}
