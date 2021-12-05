function sumTable() {
  const table = document.querySelectorAll(`table tr`);
  let sum = 0;
  for (let i = 1; i < table.length - 1; i++) {
    sum += Number(table[i].lastElementChild.textContent);
  }
  return (document.querySelector(`#sum`).textContent = sum);
}
