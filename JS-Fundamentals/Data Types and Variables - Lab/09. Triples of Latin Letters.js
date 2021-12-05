function latinL(num) {
  let print = "";

  for (let a = 0; a < num; a++) {
    for (let b = 0; b < num; b++) {
      for (let c = 0; c < num; c++) {
        console.log(
          String.fromCharCode(97 + a) +
            String.fromCharCode(97 + b) +
            String.fromCharCode(97 + c)
        );
      }
    }
  }
}
latinL(5);
