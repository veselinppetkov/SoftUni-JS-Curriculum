function solution() {
  const successMsg = `Success`;
  const storage = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };
  const foodRecipes = {
    apple: { protein: 0, carbohydrate: 1, fat: 0, flavour: 2 },
    lemonade: { protein: 0, carbohydrate: 10, fat: 0, flavour: 20 },
    burger: { protein: 0, carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, carbohydrate: 0, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };

  function restock(element, quantity) {
    storage[element] += Number(quantity);
    return successMsg;
  }

  function prepare(recipe, quantity) {
    const storageRemaining = {};
    for (const element in foodRecipes[recipe]) {
      const remaining =
        storage[element] - foodRecipes[recipe][element] * quantity;
      if (remaining < 0) {
        return `Error: not enough ${element} in stock`;
      } else {
        storageRemaining[element] = remaining;
      }
      Object.assign(storage, storageRemaining);
    }
    return successMsg;
  }

  function report() {
    return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`;
  }

  return (str) => {
    const [command, type, quantity] = str.split(" ");
    if (command == "restock") {
      return restock(type, quantity);
    } else if (command == "prepare") {
      return prepare(type, quantity);
    } else if (command == "report") {
      return report();
    }
  };
}

let manager = solution();
console.log(manager(`restock flavour 50`));
console.log(manager(`prepare lemonade 4`));
console.log(manager(`restock carbohydrate 10`));
console.log(manager(`restock flavour 10`));
console.log(manager(`prepare apple 1`));
console.log(manager(`restock fat 10`));
console.log(manager(`prepare burger 1`));
console.log(manager(`report`));
