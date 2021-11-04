window.addEventListener(`DOMContentLoaded`, start);

async function start() {
  const main = document.querySelector(`main`);

  const recipes = await getRecipes();

  main.replaceChildren();
  recipes.map(createPreview).forEach((e) => main.appendChild(e));
}

function createPreview(recipe) {
  const article = create(`article`, { className: "preview" });
  const titleDiv = create(`div`, { className: "title" });
  const h2 = create(`h2`, {}, `${recipe.name}`);
  const smallDiv = create(`div`, { className: "small" });
  const img = create(`img`, { src: `${recipe.img}` });

  titleDiv.appendChild(h2);
  smallDiv.appendChild(img);

  article.appendChild(titleDiv);
  article.appendChild(smallDiv);

  article.addEventListener("click", () => {
    h2.textContent = `Loading...`;
    togglePreview(recipe._id, article);
  });
  return article;
}

async function togglePreview(id, preview) {
  const recipe = await getRecipeById(id);

  const article = create(`article`);

  const h2 = create(`h2`, {}, `${recipe.name}`);
  const bandDiv = create(`div`, { className: "band" });
  const thumbDiv = create(`div`, { className: "thumb" });
  const img = create(`img`, { src: `${recipe.img}` });
  const ingredientsDiv = create(`div`, { className: "ingredients" });
  const h3_1 = create(`h3`, {}, `Ingredients:`);
  const ul = create(`ul`);
  recipe.ingredients.map((i) => {
    let li = create(`li`, {}, `${i}`);
    ul.appendChild(li);
  });
  const descriptionDiv = create(`div`, { className: "description" });
  const h3_2 = create(`h3`, {}, `Preparation:`);
  descriptionDiv.appendChild(h3_2);
  recipe.steps.map((s) => {
    let p = create(`p`, {}, `${s}`);
    descriptionDiv.appendChild(p);
  });

  article.appendChild(h2);
  bandDiv.appendChild(thumbDiv);
  thumbDiv.appendChild(img);
  ingredientsDiv.appendChild(h3_1);
  ingredientsDiv.appendChild(ul);
  bandDiv.appendChild(ingredientsDiv);
  article.appendChild(bandDiv);
  article.appendChild(descriptionDiv);

  preview.replaceWith(article);
}

async function getRecipes() {
  const url = `http://localhost:3030/jsonstore/cookbook/recipes`;
  const res = await fetch(url);
  const data = await res.json();

  return Object.values(data);
}

async function getRecipeById(id) {
  const url = `http://localhost:3030/jsonstore/cookbook/details/${id}`;

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
