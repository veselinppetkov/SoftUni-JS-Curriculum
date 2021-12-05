function solve(arr) {
  let pattern =
    />>(?<furniture>[A-Za-z]+)<<(?<price>\d+|\d+\.\d+)!(?<quantity>\d+)/gm;
  let furniture = [];
  let match = pattern.exec(arr);
  let sum = 0;

  while (match != null) {
    let { furniture, price, quantity } = match.groups;
    if (price > 0 && quantity > 0) {
      furniture.push(furniture);
      sum += price * quantity;
    }
    match = pattern.exec(arr);
  }

  console.log(`Bought furniture:`);
  if (furniture.length > 0) {
    console.log(furniture.join("\n"));
  }
  console.log(`Total money spend: ${sum.toFixed(2)}`);
}
solve([">>Sofa<<312.23!0", ">>TV<<300!10", ">Invalid<<!5", "Purchase"]);
console.log("----------------");
solve([">Invalid<<!5"]);
