function argumentInfo(...info) {
  const resultObj = {};
  info.forEach((el) => console.log(`${typeof el}: ${el}`));
  info.forEach((el) =>
    resultObj[typeof el] ? resultObj[typeof el]++ : (resultObj[typeof el] = 1)
  );
  Object.keys(resultObj)
    .sort((a, b) => resultObj[b] - resultObj[a])
    .forEach((key) => console.log(`${key} = ${resultObj[key]}`));
}
argumentInfo("cat", 42, () => {
  console.log("Hello world!");
});
