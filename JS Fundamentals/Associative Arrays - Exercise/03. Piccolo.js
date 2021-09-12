function piccolo(arr) {
  let spot = new Map();
  for (let tokens of arr) {
    let [direction, carNum] = tokens.split(",");
    if (direction === "IN") {
      spot.set(carNum);
    } else {
      spot.delete(carNum);
    }
  }
  let spotArr = Array.from(spot.keys()).sort();
  if (!spotArr.length == 0) {
    console.log(spotArr.join("\n"));
  } else {
    console.log(`Parking Lot is Empty`);
  }
}
piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
piccolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
