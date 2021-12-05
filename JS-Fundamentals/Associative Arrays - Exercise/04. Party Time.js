function partyTime(list) {
  let vip = [];
  let regular = [];

  while (true) {
    let guest = list.shift();
    if (guest === "PARTY") {
      break;
    }
    if (guest[0].charCodeAt(0) >= 48 && guest[0].charCodeAt(0) <= 57) {
      vip.push(guest);
    } else {
      regular.push(guest);
    }
  }

  for (let guest of list) {
    if (vip.includes(guest)) {
      vip.splice(vip.indexOf(guest), 1);
    }
    if (regular.includes(guest)) {
      regular.splice(regular.indexOf(guest), 1);
    }
  }
  let finalList = vip.concat(regular);
  console.log(`${finalList.length}\n${finalList.join("\n")}`);
}

partyTime([
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);
