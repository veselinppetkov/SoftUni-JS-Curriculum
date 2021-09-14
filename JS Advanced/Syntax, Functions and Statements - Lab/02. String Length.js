function stringLength(string1, string2, string3) {
  let totalLength = string1.length + string2.length + string3.length;
  console.log(totalLength);
  let avrLength = Math.floor(totalLength / 3);
  console.log(avrLength);
}

stringLength("chocolate", "ice cream", "cake");
stringLength("pasta", "5", "22.3");
