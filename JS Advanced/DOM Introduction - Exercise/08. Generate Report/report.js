function generateReport() {
  let output = document.querySelector(`#output`);
  let boxes = document.querySelectorAll(`thead tr th input`);
  let table = document.querySelectorAll(`tbody tr`);
  console.log(table[0].children[1].textContent);
  let resultArr = [];

  for (let i = 0; i < table.length; i++) {
    let register = {};
    for (let j = 0; j < boxes.length; j++) {
      if (boxes[j].checked) {
        register[boxes[j].name] = table[i].children[j].textContent;
      }
    }
    resultArr.push(register);
  }
  output.value = JSON.stringify(resultArr);
}
