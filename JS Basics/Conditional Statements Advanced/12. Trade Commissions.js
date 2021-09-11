function trade(input) {
  let city = input[0];
  let s = Number(input[1]);

  switch (city) {
    case "Sofia":
      if (0 <= s && s <= 500) {
        console.log((s * 0.05).toFixed(2));
      } else if (500 <= s && s <= 1000) {
        console.log((s * 0.07).toFixed(2));
      } else if (1000 <= s && s <= 10000) {
        console.log((s * 0.08).toFixed(2));
      } else if (s > 10000) {
        console.log((s * 0.12).toFixed(2));
      }
      break;

    case "Varna":
      if (0 <= s && s <= 500) {
        console.log((s * 0.045).toFixed(2));
      } else if (500 <= s && s <= 1000) {
        console.log((s * 0.075).toFixed(2));
      } else if (1000 <= s && s <= 10000) {
        console.log((s * 0.1).toFixed(2));
      } else if (s > 10000) {
        console.log((s * 0.13).toFixed(2));
      }
      break;

    case "Plovdiv":
      if (0 <= s && s <= 500) {
        console.log((s * 0.055).toFixed(2));
      } else if (500 <= s && s <= 1000) {
        console.log((s * 0.08).toFixed(2));
      } else if (1000 <= s && s <= 10000) {
        console.log((s * 0.12).toFixed(2));
      } else if (s > 10000) {
        console.log((s * 0.145).toFixed(2));
      } else {
        console.log("error");
      }
      break;

    default:
      console.log("error");
      break;
  }
}

trade(["Plovdiv", "-20"]);
