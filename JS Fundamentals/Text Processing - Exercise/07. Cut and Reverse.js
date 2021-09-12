function cutNReverse(text) {
  let half = text.length / 2;
  let first = text.substring(0, text.length / 2);
  let second = text.substring(text.length / 2);

  console.log(Array.from(first).reverse().join(""));
  console.log(Array.from(second).reverse().join(""));
}
cutNReverse("tluciffiDsIsihTgnizamAoSsIsihT");
