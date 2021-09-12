function perfectNum(num) {
  let divisorsSum = 0;

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      divisorsSum += i;
    }
  }

  if (divisorsSum === num) {
    return `We have a perfect number!`;
  } else {
    return `It's not so perfect.`;
  }
}

console.log(perfectNum(1236498));
