function walking(input) {
  let i = 0;
  let steps = input[i];
  let goal = 10000;
  let stepsCounter = 0;

  while (steps != "Going home") {
    stepsCounter += Number(steps);

    if (stepsCounter >= goal) {
      console.log(`Goal reached! Good job!`);
      console.log(`${stepsCounter - goal} steps over the goal!`);
      return;
    }
    steps = input[++i];
  }
  stepsCounter += Number(input[++i]);
  if (stepsCounter >= goal) {
    console.log(`Goal reached! Good job!`);
    console.log(`${stepsCounter - goal} steps over the goal!`);
  } else {
    console.log(`${goal - stepsCounter} more steps to reach goal.`);
  }
}

walking(["1000", "1500", "2000", "6500"]);
// walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
// walking(["1500", "300", "2500", "3000", "Going home", "200"]);
// walking(["125", "250", "4000", "30", "2678", "4682"]);
