class Restaurant {
  constructor(budgetMoney) {
    this.budgetMoney = Number(budgetMoney);
    this.menu = {};
    this.stockProducts = {};
    this.history = [];
  }
  loadProducts(productsArr) {
    productsArr.forEach((product) => {
      let [name, quantity, totalPrice] = product.split(" ");
      quantity = Number(quantity);
      totalPrice = Number(totalPrice);
      if (totalPrice <= this.budgetMoney) {
        if (!this.stockProducts.hasOwnProperty(name)) {
          this.stockProducts[name] = quantity;
        } else {
          this.stockProducts[name] += quantity;
        }
        this.budgetMoney -= totalPrice;
        return this.history.push(`Successfully loaded ${quantity} ${name}`);
      }
      return this.history.push(
        `There was not enough money to load ${quantity} ${name}`
      );
    });
    return this.history.join("\n");
  }
  addToMenu(meal, neededProducts, price) {
    if (!this.menu.hasOwnProperty(meal)) {
      this.menu[meal] = { neededProducts, price };
    } else {
      return `The ${meal} is already in the our menu, try something different.`;
    }
    if (Object.keys(this.menu).length == 1) {
      return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
    } else if (
      Object.keys(this.menu).length > 0 &&
      Object.keys(this.menu).length != 1
    ) {
      return `Great idea! Now with the ${meal} we have ${
        Object.keys(this.menu).length
      } meals in the menu, other ideas?`;
    }
  }
  showTheMenu() {
    const resultArr = [];
    if (Object.keys(this.menu).length == 0) {
      return `Our menu is not ready yet, please come later...`;
    }
    Object.keys(this.menu).forEach((key) => {
      resultArr.push(`${key} - $ ${this.menu[key].price}`);
    });
    return resultArr.join("\n");
  }
  makeTheOrder(meal) {
    let hasFailed = 0;
    if (!this.menu.hasOwnProperty(meal)) {
      return `There is not ${meal} yet in our menu, do you want to order something else?`;
    }
    this.menu[meal].neededProducts.forEach((el) => {
      let [product, quantity] = el.split(" ");
      quantity = Number(quantity);
      if (
        this.stockProducts.hasOwnProperty(product) &&
        this.stockProducts[product] >= quantity
      ) {
        this.stockProducts[product] -= quantity;
        this.budgetMoney += this.menu[meal].price;
      } else {
        hasFailed++;
      }
    });
    if (hasFailed == 0) {
      return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    } else {
      return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
    }
  }
}

let kitchen = new Restaurant(1000);
kitchen.loadProducts([
  "Yogurt 30 3",
  "Honey 50 4",
  "Strawberries 20 10",
  "Banana 5 1",
]);
kitchen.addToMenu(
  "frozenYogurt",
  ["Yogurt 5000", "Honey 1", "Banana 1", "Strawberries 10"],
  9.99
);
console.log(kitchen.makeTheOrder("frozenYogurt"));
