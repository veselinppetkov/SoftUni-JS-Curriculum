function solve(input) {
  let pvcCount = Number(input[0]);
  let pvcMeasurements = input[1];
  let delivery = input[2];
  let singlePrice = 0;
  let totalSum = 0;

  if (pvcCount > 10) {
    switch (pvcMeasurements) {
      case "90X130":
        singlePrice = 110;
        if (pvcCount > 30 && pvcCount <= 60) {
          singlePrice *= 0.95;
        } else if (pvcCount > 60) {
          singlePrice *= 0.92;
        } else {
          singlePrice;
        }
        totalSum = singlePrice * pvcCount;
        break;

      case "100X150":
        singlePrice = 140;
        if (pvcCount > 40 && pvcCount <= 80) {
          singlePrice *= 0.94;
        } else if (pvcCount > 80) {
          singlePrice *= 0.9;
        } else {
          singlePrice;
        }
        totalSum = singlePrice * pvcCount;
        break;

      case "130X180":
        singlePrice = 190;
        if (pvcCount > 20 && pvcCount <= 50) {
          singlePrice *= 0.93;
        } else if (pvcCount > 50) {
          singlePrice *= 0.88;
        } else {
          singlePrice;
        }
        totalSum = singlePrice * pvcCount;
        break;

      case "200X300":
        singlePrice = 250;
        if (pvcCount > 25 && pvcCount <= 0) {
          singlePrice *= 0.91;
        } else if (pvcCount > 50) {
          singlePrice *= 0.86;
        } else {
          singlePrice;
        }
        totalSum = singlePrice * pvcCount;
        break;
    }
  } else {
    console.log(`Invalid order`);
  }

  switch (delivery) {
    case "With delivery":
      totalSum += 60;
      if (pvcCount > 100) {
        console.log(`${(totalSum * 0.96).toFixed(2)} BGN`);
      } else {
        console.log(`${totalSum.toFixed(2)} BGN`);
      }
      break;

    default: {
      console.log(`${totalSum.toFixed(2)} BGN`);
    }
  }
}

solve(["40", "90X130", "Without delivery"]);
solve(["105", "100X150", "With delivery"]);
solve(["2", "130X180", "With delivery"]);
