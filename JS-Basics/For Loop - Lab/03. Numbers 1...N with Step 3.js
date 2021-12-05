function number(input) {
    let firstNum = Number(input[0]);
  
    for (let i = 1; i <= firstNum; i+=3) {
      console.log(i++);
    }
  }
  number(["10"]);