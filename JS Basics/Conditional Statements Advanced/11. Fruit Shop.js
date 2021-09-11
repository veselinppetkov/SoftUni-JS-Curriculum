function shop(input) {
  let fruit = input[0];
  let day = input[1];
  let amount = Number(input[2]);

  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      if (fruit == "banana") {
        console.log((amount * 2.5).toFixed(2));
      } else if (fruit == "apple") {
        console.log((amount * 1.2).toFixed(2));
      } else if (fruit == "orange") {
        console.log((amount * 0.85).toFixed(2));
      } else if (fruit == "grapefruit") {
        console.log((amount * 1.45).toFixed(2));
      } else if (fruit == "kiwi") {
        console.log((amount * 2.7).toFixed(2));
      } else if (fruit == "pineapple") {
        console.log((amount * 5.5).toFixed(2));
      } else if (fruit == "grapes") {
        console.log((amount * 3.85).toFixed(2));
      } else {
          console.log("error");
      }
      break;
    case "Saturday":
    case "Sunday":
      if (fruit == "banana") {
        console.log((amount * 2.7).toFixed(2));
      } else if (fruit == "apple") {
        console.log((amount * 1.25).toFixed(2));
      } else if (fruit == "orange") {
        console.log((amount * 0.9).toFixed(2));
      } else if (fruit == "grapefruit") {
        console.log((amount * 1.6).toFixed(2));
      } else if (fruit == "kiwi") {
        console.log((amount * 3.0).toFixed(2));
      } else if (fruit == "pineapple") {
        console.log((amount * 5.6).toFixed(2));
      } else if (fruit == "grapes") {
        console.log((amount * 4.2).toFixed(2));
      } else {
          console.log("error");
      }
      break;

      default: console.log("error");
      break; 
  }
}
shop(["apple", "Tuesday", "2"]);
shop(["orange", "Sunday", "3"]);
shop(["kiwi", "Monday", "2.5"]);
shop(["grapes", "Saturday", "0.5"]);
shop(["tomato", "Monday", "0.5"]);
