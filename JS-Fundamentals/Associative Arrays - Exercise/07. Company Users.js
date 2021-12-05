function companyUsers(dataList) {
  let list = {};
  for (let tokens of dataList) {
    let [company, user] = tokens.split(" -> ");
    if (!list.hasOwnProperty(company)) {
      list[company] = [];
    }

    if (Object.values(list[company]).includes(user)) {
      continue;
    }
    list[company] = list[company].concat(user);
  }
  let sorted = Object.entries(list).sort((a, b) => a[0].localeCompare(b[0]));

  for (let tokens of sorted) {
    let company = tokens[0];
    let users = tokens[1];
    console.log(company);
    for (let person of users) {
      console.log(`-- ${person}`);
    }
  }
}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> CC12344",
  "Lenovo -> XX23456",
  "SoftUni -> AA12345",
  "Movement -> DD11111",
]);
