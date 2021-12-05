function race(input) {
  let participants = input.shift().split(", ");
  let line = input.shift();
  let charPattern = /[A-Za-z]/g;
  let pointsPattern = /\d/g;
  let obj = {};

  while (line != "end of race") {
    let name = line.match(charPattern).join("");
    let distance = line.match(pointsPattern).map(Number);
    let reducer = (a, b) => a + b;
    distance = distance.reduce(reducer);

    if (obj.hasOwnProperty(name)) {
      obj[name] += distance;
      line = input.shift();
      continue;
    }

    if (participants.includes(name)) {
      obj[name] = distance;
    }

    line = input.shift();
  }
  let sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);

  if (sorted[0]) {
    console.log(`1st place: ${sorted[0][0]}`);
  }

  if (sorted[1]) {
    console.log(`2nd place: ${sorted[1][0]}`);
  }

  if (sorted[2]) {
    console.log(`3rd place: ${sorted[2][0]}`);
  }
}
race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
