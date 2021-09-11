function weekOrWork(input) {
  let day = input[0];

  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      console.log("Working day");
      break;
    case "Saturday":
    case "Sunday":
      console.log("Weekend");
      break;
      default:
          console.log("Error");
          break; 
  }
}

weekOrWork(["Monday"]);
weekOrWork(["Saturday"]);
weekOrWork(["Tuesday"]);
weekOrWork(["Tuesdayy"]);

