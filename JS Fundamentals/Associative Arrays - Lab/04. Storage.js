function storage(list) {
  let object = {};

  for (let tokens of list) {
    let [vegitable, quantity] = tokens.split(" ");
    if (object.hasOwnProperty(vegitable)) {
      object[vegitable] += Number(quantity);
    } else {
      object[vegitable] = Number(quantity);
    }
  }
  for (let [product, quantity] of Object.entries(object)) {
    console.log(`${product} -> ${quantity}`);
  }
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
