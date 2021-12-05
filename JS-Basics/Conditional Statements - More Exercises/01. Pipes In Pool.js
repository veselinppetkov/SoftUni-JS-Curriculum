function pool(input) {
  let volume = Number(input[0]);

  let p1 = Number(input[1]);
  let p2 = Number(input[2]);

  let hoursOut = Number(input[3]);

  let p1Vol = p1 * hoursOut;
  let p2Vol = p2 * hoursOut;

  let totalSum = p1Vol + p2Vol;

  if (totalSum <= volume) {
    console.log(
      `The pool is ${((totalSum / volume)*100).toFixed(2)}% full. Pipe 1: ${
        ((p1Vol / totalSum)*100).toFixed(2)
      }%. Pipe 2: ${((p2Vol / totalSum)*100).toFixed(2)}% full.`
    );
  } else {
    console.log(
      `For ${hoursOut.toFixed(2)} hours the pool overflows with ${
        (totalSum - volume).toFixed(2)
      } liters.`
    );
  }
}

pool(["100", "100", "100", "2.5"]);
