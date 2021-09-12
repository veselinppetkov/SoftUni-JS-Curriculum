function astra(input) {
  let pattern =
    /(#|\|)([A-Za-z]+|[A-Za-z]+ [A-Za-z]+)\1(\d{2}\/\d{2}\/\d{2})\1([0-9]{1,4}|10000)\1/gm;
  let match = pattern.exec(input);
  let caloriesTotal = 0;
  let result = [];

  while (match != null) {
    let string = `Item: ${match[2]}, Best before: ${match[3]}, Nutrition: ${match[4]}`;
    result.push(string);
    caloriesTotal += Number(match[4]);
    match = pattern.exec(input);
  }
  let days = Math.floor(caloriesTotal / 2000);

  console.log(`You have food to last you for: ${days} days!`);
  console.log(result.join("\n"));
}

// astra([
//   "#Bread#19/03/21#000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|2500||Not right|6.8.20|5|",
// ]);
astra([
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);
// astra(["Hello|#Invalid food#19/03/20#450|$5*(@"]);
