function solve() {
  let text = document.getElementById(`text`).value.toLowerCase();
  let namingConvention = document.getElementById(`naming-convention`).value;

  if (namingConvention == "Camel Case") {
    let splitted = text.split(" ");
    let resultArr = [splitted[0]];
    for (let i = 1; i < splitted.length; i++) {
      resultArr.push(
        splitted[i].charAt(0).toUpperCase() + splitted[i].slice(1)
      );
    }
    return (document.getElementById(`result`).innerHTML = resultArr.join(""));
  } else if (namingConvention == "Pascal Case") {
    let splitted = text.split(" ");
    let resultArr = [];
    for (let i = 0; i < splitted.length; i++) {
      resultArr.push(
        splitted[i].charAt(0).toUpperCase() + splitted[i].slice(1)
      );
    }
    return (document.getElementById(`result`).innerHTML = resultArr.join(""));
  } else {
    return (document.getElementById(`result`).innerHTML = "Error!");
  }
}
