function salary(input) {
  let tabs = Number(input[0]);
  let salary = Number(input[1]);

  for (let i = 2; i <= tabs + 1; i++) {
    let currentWeb = input[i];

    if (currentWeb == "Facebook") {
      salary -= 150;
      if (salary <= 0) {
        console.log("You have lost your salary.");
        break;
      }
    }

    if (currentWeb == "Instagram") {
      salary -= 100;
      if (salary <= 0) {
        console.log("You have lost your salary.");
        break;
      }
    }

    if (currentWeb == "Reddit") {
      salary -= 50;
      if (salary <= 0) {
        console.log("You have lost your salary.");
        break;
      }
    }
  }
  if (salary > 0) {
    console.log(salary.toFixed(0));
  }
}

salary([
  "10",
  "750",
  "Facebook",
  "Dev.bg",
  "Instagram",
  "Facebook",
  "Reddit",
  "Facebook",
  "Facebook",
]);
salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);
