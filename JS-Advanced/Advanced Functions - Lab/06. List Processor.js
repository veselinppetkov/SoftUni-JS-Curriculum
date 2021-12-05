function listProcessor(commands) {
  let resultArr = [];
  const processor = {
    add(string) {
      resultArr.push(string);
    },
    remove(string) {
      resultArr = resultArr.filter((el) => el != string);
    },
    print() {
      console.log(resultArr.join(","));
    },
  };

  for (let el of commands) {
    let [currentCommand, word] = el.split(" ");
    processor[currentCommand](word);
  }
}
listProcessor(["add hello", "add again", "remove hello", "add again", "print"]);
listProcessor([
  "add pesho",
  "add george",
  "add peter",
  "remove peter",
  "print",
]);
