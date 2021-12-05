async function lockedProfile() {
  const main = document.querySelector(`main`);
  const profile = await getProfiles();
  profile.map(createStructure).forEach((u) => main.appendChild(u));

  document
    .querySelectorAll(`button`)
    .forEach((btn) => btn.addEventListener("click", onToggle));
}

async function getProfiles() {
  const url = `http://localhost:3030/jsonstore/advanced/profiles`;
  const res = await fetch(url);
  const data = await res.json();
  return Object.values(data);
}

function createStructure(user) {
  const mainDiv = create("div", { className: "profile" }, "");
  const img = create(
    "img",
    { className: "userIcon", src: `./iconProfile2.png` },
    ""
  );
  mainDiv.appendChild(img);
  const lockLabel = create(`label`, {}, `Lock`);
  mainDiv.appendChild(lockLabel);
  const firstInput = create(`input`, {
    type: "radio",
    name: "user1Locked",
    value: "lock",
    checked: true,
  });
  mainDiv.appendChild(firstInput);
  const unlockLabel = create(`label`, {}, `Unlock`);
  mainDiv.appendChild(unlockLabel);
  const secondInput = create(`input`, {
    type: "radio",
    name: "user1Locked",
    value: "unlock",
  });
  mainDiv.appendChild(secondInput);
  const br = create(`br`);
  mainDiv.appendChild(br);
  const hr1 = create(`hr`);
  mainDiv.appendChild(hr1);
  const userLabel = create(`label`, {}, `Username`);
  mainDiv.appendChild(userLabel);

  const thirdInput = create(`input`, {
    type: "text",
    name: "user1Username",
    value: `${user.username}`,
    disabled: true,
    readOnly: true,
  });
  mainDiv.appendChild(thirdInput);
  const secondDiv = create("div", { className: "hiddenInfo" });
  const hr2 = create(`hr`);
  secondDiv.appendChild(hr2);
  const emailLabel = create(`label`, {}, `Email:`);
  secondDiv.appendChild(emailLabel);
  const fourthInput = create(`input`, {
    type: "email",
    name: "user1Email",
    value: `${user.email}`,
    disabled: true,
    readOnly: true,
  });
  secondDiv.appendChild(fourthInput);
  const ageLabel = create(`label`, {}, `Age:`);
  secondDiv.appendChild(ageLabel);
  const fifthInput = create(`input`, {
    type: "email",
    name: "user1Age",
    value: `${user.age}`,
    disabled: true,
    readOnly: true,
  });
  secondDiv.appendChild(fifthInput);
  mainDiv.appendChild(secondDiv);
  const btn = create(`button`, {}, `Show more`);
  mainDiv.appendChild(btn);

  return mainDiv;
}

function onToggle({ target }) {
  const hiddenInfo = target.parentNode.querySelector(`div`);

  const isActive = target.parentNode.querySelector(
    `input[type="radio"][value="unlock"]`
  ).checked;

  if (isActive) {
    if (target.textContent == "Show more") {
      hiddenInfo.className = "profile";
      hiddenInfo.style.display = "inline";
      target.textContent = "Hide it";
    } else {
      hiddenInfo.className = "hiddenInfo";
      target.textContent = "Show more";
    }
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
