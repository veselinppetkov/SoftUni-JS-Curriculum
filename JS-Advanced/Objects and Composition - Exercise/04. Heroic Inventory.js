function heroicInventory(arr) {
  let registerArr = [];

  for (let elements of arr) {
    let [name, level, ...items] = elements.split(" / ");
    let registerObj = {};
    registerObj["name"] = name;
    registerObj["level"] = Number(level);
    registerObj["items"] = items.length > 0 ? items.toString().split(", ") : [];
    registerArr.push(registerObj);
  }
  console.log(JSON.stringify(registerArr));
}

heroicInventory(["Jake / 1000"]);
