function factoriel(input) {
  let n = Number(input[0]);
  let def = 1;

  for (let i = 1; i <= n; i++) {
    def *= i;
  }
  console.log(def);
}

factoriel(["8"]);
