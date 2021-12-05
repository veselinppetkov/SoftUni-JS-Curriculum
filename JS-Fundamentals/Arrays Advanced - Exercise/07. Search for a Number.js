function search(arr, threeNums) {
  let counter = 0;
  [take, deleted, search] = threeNums;

  arr.splice(take);
  arr.splice(0, deleted);

  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) == search) {
      counter++;
    }
  }
  return `Number ${search} occurs ${counter} times.`;
}

console.log(search([5, 2, 3, 4, 1, 6], [5, 2, 1]));
