function invalNum(input) {
  let num = Number(input[0]);
  let isValid = (num >= 100 && num <= 200) || num == 0;

  if (!isValid) {
    console.log("invalid");
  }
}

invalNum(["75"]);
invalNum(["0"]);
invalNum(["150"]);
