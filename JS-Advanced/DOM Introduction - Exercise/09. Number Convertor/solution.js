function solve() {
  let input = document.getElementById(`input`);
  let output = document.getElementById(`result`);
  let selectMenu = document.querySelector(`#selectMenuTo`);
  let optionBinary = document.createElement("option");
  optionBinary.value = "binary";
  optionBinary.innerHTML = "Binary";
  let optionHexadecimal = document.createElement("option");
  optionHexadecimal.value = "hexadecimal";
  optionHexadecimal.innerHTML = "Hexadecimal";

  selectMenu.appendChild(optionBinary);
  selectMenu.appendChild(optionHexadecimal);

  document
    .getElementsByTagName(`button`)[0]
    .addEventListener("click", calculate);

  function calculate() {
    if (selectMenu.value == "binary") {
      output.value = Number(input.value).toString(2);
    } else if (selectMenu.value == "hexadecimal") {
      output.value = Number(input.value).toString(16).toUpperCase();
    }
  }
}
