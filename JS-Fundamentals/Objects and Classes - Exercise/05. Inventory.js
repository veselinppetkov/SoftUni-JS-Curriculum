function inventory(list) {
  let heroData = [];

  for (let tokens of list) {
    let token = tokens.split(" / ");

    let hero = token[0];
    let level = Number(token[1]);
    let items = token[2].split(", ");

    let heroReg = {
      hero,
      level,
      items,
    };
    heroData.push(heroReg);
  }
  let sorted = heroData.sort((a, b) => a.level - b.level);

  for (let player of sorted) {
    console.log(`Hero: ${player.hero}`);
    console.log(`level => ${player.level}`);
    console.log(
      `items => ${player.items.sort((a, b) => a.localeCompare(b)).join(", ")}`
    );
  }
}

inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
