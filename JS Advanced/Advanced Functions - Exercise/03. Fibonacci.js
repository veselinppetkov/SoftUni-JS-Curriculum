function getFibonator() {
  let previousNum = 1;
  let currentNum = 0;

  return () => {
    const nextNum = currentNum + previousNum;
    previousNum = currentNum;
    currentNum = nextNum;
    return currentNum;
  };
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
