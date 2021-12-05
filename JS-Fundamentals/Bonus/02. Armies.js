function armies(input) {
  let armyMap = new Map();
  for (let elements of input) {
    let command = elements.split(" ");
    console.log(command);
    if (command.includes("arrives")) {
      command.pop();
      armyMap.set(command.join(" "));
      console.log(armyMap);
      console.log(`YES, HE ARRIVES!`);
    } else if (command.includes("+")) {
      console.log(`YES, I MUST SUM`);
    } else {
      let num = Number(command.pop());
      let army = command.pop().replace(",", "");
      let commander = command
        .toString()
        .trim()
        .replace(":", "")
        .replace(",", " ");
      if (armyMap.has(commander)) {
        console.log(`YES, I MUST ADD`);
      } else {
        console.log(`NO, I MUST NOT ADD`);
      }
    }
  }
}
armies([
  "Rick Burr arrives",
  "Fergus: Wexamp, 30245",
  "Rick Burr: Juard, 50000",
  "Findlay arrives",
  "Findlay: Britox, 34540",
  "Wexamp + 6000",
  "Juard + 1350",
  "Britox + 4500",
  "Porter arrives",
  "Porter: Legion, 55000",
  "Legion + 302",
  "Rick Burr defeated",
  "Porter: Retix, 3205",
]);
