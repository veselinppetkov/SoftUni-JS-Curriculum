function sortByTwo(arr) {
  arr.sort((x, y) => {
    let firstCriteria = x.length - y.length;
    let secondCriteria = x.localeCompare(y);
    return firstCriteria || secondCriteria;
  });
  console.log(arr.join("\n"));
}

sortByTwo(["alpha", "beta", "gamma"]);
sortByTwo(["test", "Deny", "omen", "Default"]);
