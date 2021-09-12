function charInRange(symbolA, symbolB) {
  let symbolAA = symbolA.charCodeAt(0);
  let symbolBB = symbolB.charCodeAt(0);
  let print = "";

  if (symbolAA > symbolBB) {
    symbolA = symbolBB;
    symbolB = symbolAA;
  } else {
    symbolA = symbolAA;
    symbolB = symbolBB;
  }

  for (let i = symbolA + 1; i < symbolB; i++) {
    print += `${String.fromCharCode(i)} `;
  }
  return print;
}

console.log(charInRange("a", "d"));
console.log(charInRange("#", ":"));
