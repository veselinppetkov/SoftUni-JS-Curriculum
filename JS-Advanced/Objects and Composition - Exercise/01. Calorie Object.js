function calorieObj(input) {
  const resultObj = {};

  for (let i = 0; i < input.length; i += 2) {
    resultObj[input[i]] = Number(input[i + 1]);
  }
  console.log(resultObj);
}
calorieObj(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
