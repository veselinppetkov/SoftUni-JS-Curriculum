function extractText() {
  const items = document.querySelectorAll("#items li");
  let resultString = "";

  for (const item of items) {
    resultString += `${item.textContent}\n`;
  }

  document.getElementById(`result`).value = resultString;
}
