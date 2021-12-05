function fibonacci(n, k) {
  let array = [1];

  for (let i = 1; i < n; i++) {
    let elements = array.slice(-k);
    let current = 0;
    for (let nums of elements) {
      current += nums;
    }

    array.push(current);
  }

  console.log(array.join(" "));
}
fibonacci(6, 3);
