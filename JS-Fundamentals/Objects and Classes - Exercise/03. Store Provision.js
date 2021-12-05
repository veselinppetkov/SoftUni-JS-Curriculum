function storeProvision(stock, delivery) {
  let store = [];

  for (let i = 0; i < stock.length; i += 2) {
    let name = stock[i];
    let quantity = Number(stock[i + 1]);

    let obj = {
      name,
      quantity,
    };
    store.push(obj);
  }

  for (let i = 0; i < delivery.length; i += 2) {
    let name = delivery[i];
    let quantity = Number(delivery[i + 1]);

    let obj = {
      name,
      quantity,
    };

    let index = store.findIndex((x) => x.name === name);
    if (index === -1) {
      store.push(obj);
    } else {
      store[index].quantity += Number(quantity);
    }
  }

  for (let elements of store) {
    console.log(`${elements.name} -> ${elements.quantity}`);
  }
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
