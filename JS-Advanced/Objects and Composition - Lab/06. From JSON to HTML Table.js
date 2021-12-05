function fromJsonToHTML(input) {
  let arr = JSON.parse(input);
  let outputArr = [];
  
  outputArr.push("<table>");
  outputArr.push(addTableHeader(arr));
  arr.forEach((object) => outputArr.push(addTableEntry(object)));
  outputArr.push("</table>");

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
  console.log(outputArr.join("\n"));
}
fromJsonToHTML(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`);
