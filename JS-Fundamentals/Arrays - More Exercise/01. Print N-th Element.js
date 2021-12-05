function print(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length - 1; i += Number(arr[arr.length - 1])) {
    newArr.push(arr[i]);
  }
  console.log(newArr.join(" "));
}
print(["5", "20", "31", "4", "20", "2"]);
print(["dsa", "asd", "test", "test", "2"]);
print(["1", "2", "3", "4", "5", "6"]);
