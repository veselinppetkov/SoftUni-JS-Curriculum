function solve(arr) {
  let desired = arr.shift();

  for (let i = 0; i < arr.length; i++) {
    let thickness = arr[i];

    let cut = 0;
    let lap = 0;
    let grind = 0;
    let etch = 0;
    let xray = 0;

    while (desired !== thickness) {
      if (thickness / 4 >= desired - 1) {
        thickness = Math.floor(thickness / 4);
        cut++;
      } else if (thickness * 0.8 >= desired - 1) {
        thickness = Math.floor(thickness * 0.8);
        lap++;
      } else if (thickness - 20 >= desired - 1) {
        thickness = Math.floor(thickness - 20);
        grind++;
      } else if (thickness - 2 >= desired - 1) {
        thickness = Math.floor(thickness - 2);
        etch++;
      } else if (thickness + 1 == desired) {
        thickness += 1;
        xray++;
      }
    }
    console.log(`Processing chunk ${arr[i]} microns`);

    if (cut > 0) {
      console.log(`Cut x${cut}`);
      console.log(`Transporting and washing`);
    }

    if (lap > 0) {
      console.log(`Lap x${lap}`);
      console.log(`Transporting and washing`);
    }

    if (grind > 0) {
      console.log(`Grind x${grind}`);
      console.log(`Transporting and washing`);
    }

    if (etch > 0) {
      console.log(`Etch x${etch}`);
      console.log(`Transporting and washing`);
    }

    if (xray > 0) {
      console.log(`X-ray x${xray}`);
    }
    console.log(`Finished crystal ${thickness} microns`);
  }
}
solve([1375, 50000]);
