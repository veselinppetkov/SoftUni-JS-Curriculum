function solve(input) {
  let user = input[0];
  let pass = input[1];
  let i = 2;
  let passAttempt = input[i];

  while (passAttempt !== pass) {
    i++;
    passAttempt = input[i];
  }
  console.log(`Welcome ${user}!`);
}
solve(["Nakov", "1234", "Pass", "1324", "1234"]);
solve(["Gosho", "secret", "secret"]);
