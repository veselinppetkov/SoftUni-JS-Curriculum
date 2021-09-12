function firstLast(arr) {
  let k = arr.shift();

  let forward = arr.slice(0, k);
  let backwards = arr.slice(-k);

  console.log(`${forward.join(" ")} \n${backwards.join(" ")}`);
}

firstLast([3, 6, 7, 8, 9]);
