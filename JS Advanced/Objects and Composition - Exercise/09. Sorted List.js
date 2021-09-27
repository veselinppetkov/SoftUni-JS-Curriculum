function createSortedList() {
  return {
    resultArr: [],
    add(num) {
      this.resultArr.push(num);
      this.resultArr.sort((a, b) => a - b);
    },
    get(index) {
      if (this.resultArr[index] != undefined) {
        return this.resultArr[index];
      }
    },
    remove(index) {
      if (this.resultArr[index] != undefined) {
        this.resultArr.splice(index, 1);
      }
    },
    get size() {
      return this.resultArr.length;
    },
  };
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
