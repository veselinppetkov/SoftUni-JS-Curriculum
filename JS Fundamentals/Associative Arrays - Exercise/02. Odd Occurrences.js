function oddOccurs(list) {
  let newList = list.toLowerCase().split(" ");
  let obj = {};

  for (let words of newList) {
    if (!obj.hasOwnProperty(words)) {
      obj[words] = 0;
    }
    obj[words]++;
  }

  let sorted = Object.entries(obj).filter((x) => x[1] % 2 != 0);
  let sum = [];
  for (let tokens of sorted) {
    sum.push(tokens[0]);
  }
  console.log(sum.join(" "));
}
oddOccurs("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
