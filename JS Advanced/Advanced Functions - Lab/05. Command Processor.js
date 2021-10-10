function solution() {
  let resultString = "";
  return {
    append(text) {
      resultString += text;
    },
    removeStart(n) {
      resultString = resultString.slice(n);
    },
    removeEnd(n) {
      resultString = resultString.slice(0, -n);
    },
    print() {
      console.log(resultString);
    },
  };
}

let firstZeroTest = solution();
firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
