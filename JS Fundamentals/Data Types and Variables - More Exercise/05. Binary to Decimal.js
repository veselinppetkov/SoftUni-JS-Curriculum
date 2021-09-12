function conventor(binary) {
  let sum = 0;
  for (let i = 0; i < binary.length; i++) {
    sum += Number(binary[i]) * Math.pow(2, binary.length - (i + 1));
  }
  console.log(sum);
}
conventor("00001001");
conventor("11110000");
