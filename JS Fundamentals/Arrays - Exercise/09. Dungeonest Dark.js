function dungeon(arr) {
  let health = 100;
  let coins = 0;
  let counter = 0;
  let commands = arr.toString().split("|");

  for (let i = 0; i < commands.length; i++) {
    let [command, value] = commands[i].split(" ");

    if (command == "potion") {
      if (health == 100) {
        continue;
      }

      if (health + Number(value) < 100) {
        health += Number(value);
        console.log(`You healed for ${value} hp.`);
        console.log(`Current health: ${health} hp.`);
        counter++;
        continue;
      } else {
        let bonus = 100 - health;
        health += 100 - health;
        console.log(`You healed for ${bonus} hp.`);
        console.log(`Current health: ${health} hp.`);
        counter++;
        continue;
      }
    }

    if (command == "chest") {
      coins += Number(value);
      console.log(`You found ${value} coins.`);
      counter++;
      continue;
    }

    health -= Number(value);

    if (health > 0) {
      console.log(`You slayed ${command}.`);
      counter++;
      continue;
    } else {
      counter++;
      console.log(`You died! Killed by ${command}.`);
      console.log(`Best room: ${counter}`);
      return;
    }
  }

  console.log(`You've made it!`);
  console.log(`Coins: ${coins}`);
  console.log(`Health: ${health}`);
}
dungeon(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
// dungeon(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
