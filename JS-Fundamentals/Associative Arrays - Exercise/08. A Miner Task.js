function minerTask(arr) {
  let result = {};
  for (let i = 0; i < arr.length; i += 2) {
    if (Object.keys(result).includes(arr[i])) {
      result[arr[i]] += Number(arr[i + 1]);
    } else {
      result[arr[i]] = Number(arr[i + 1]);
    }
  }
  for (let [metal, quantity] of Object.entries(result)) {
    console.log(`${metal} -> ${quantity}`);
  }
}
minerTask(["Gold", "155", "Silver", "10", "Copper", "17", "Gold", "15"]);
