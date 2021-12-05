const main = document.querySelector(`main`);

export async function showSection(section) {
  main.replaceChildren(section);
}

export function e(type, attributes, ...content) {
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
