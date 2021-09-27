function fromJsonToHTML(inputJson) {
  let inputArray = JSON.parse(inputJson);
  let outputArray = ["<table>"];
  outputArray.push(addTableHeader(inputArray));
  inputArray.forEach((object) => outputArray.push(addTableEntry(object)));
  outputArray.push("</table>");

  function addTableHeader(array) {
    let output = "\t<tr>";
    Object.keys(array[0]).forEach((key) => {
      output += `<th>${convertSpecialCharacter(key)}</th>`;
    });
    output += "</tr>";

    return output;
  }

  function addTableEntry(object) {
    let output = "\t<tr>";
    Object.values(object).forEach((value) => {
      output += `<td>${convertSpecialCharacter(value)}</td>`;
    });
    output += "</tr>";

    return output;
  }

  function convertSpecialCharacter(value) {
    return value
      .toString()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  console.log(outputArray.join("\n"));
}
fromJsonToHTML(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`);
