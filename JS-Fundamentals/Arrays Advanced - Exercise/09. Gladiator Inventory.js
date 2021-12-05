function gladInventory(arr) {
  let inventory = arr.shift().split(" ");

  let actions = {
    Buy: buy,
    Trash: trash,
    Repair: repair,
    Upgrade: upgrade,
  };

  while (arr.length > 0) {
    let line = arr.shift().split(" ");
    let [command, equipment] = line;
    let action = actions[command];
    action(equipment);
  }

  function buy(equipment) {
    if (!inventory.includes(equipment)) {
      inventory.push(equipment);
    }
  }
  function trash(equipment) {
    if (inventory.includes(equipment)) {
      inventory.splice(inventory.indexOf(equipment), 1);
    }
  }
  function repair(equipment) {
    if (inventory.includes(equipment)) {
      inventory.push(
        inventory.splice(inventory.indexOf(equipment), 1).join("")
      );
    }
  }
  function upgrade(equipment) {
    let [equip, upgrade] = equipment.split("-");
    if (inventory.includes(equip)) {
      inventory.splice(
        inventory.indexOf(equip) + 1,
        0,
        equipment.replace("-", ":")
      );
    }
  }
  console.log(inventory.join(" "));
}
gladInventory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);
gladInventory([
  "SWORD Shield Spear",
  "Trash Bow",
  "Repair Shield",
  "Upgrade Helmet-V",
]);
