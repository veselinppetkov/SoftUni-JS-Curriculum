function solve(x1, y1, x2, y2) {
  result(x1, y1, 0, 0);
  result(x2, y2, 0, 0);
  result(x1, y1, x2, y2);

  function result(x1, y1, x2, y2) {
    let distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    let isValid = Number.isInteger(distance) ? "valid" : "invalid";

    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid}`);
  }
}
solve(3, 0, 0, 4);
