function equalArray(arr1, arr2) {
  let sum = 0;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      sum += Number(arr1[i]);
    } else {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      return;
    }
  }
  console.log(`Arrays are identical. Sum: ${sum}`);
}
equalArray(["10", "20", "30"], ["10", "20", "30"]);
equalArray(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
equalArray(["1"], ["10"]);
