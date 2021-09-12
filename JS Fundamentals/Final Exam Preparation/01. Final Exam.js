function solve(input) {
  let mail = input.shift();
  let line = input.shift().split(" ");

  let actions = {
    Upper: upper,
    Lower: lower,
    Insert: insert,
    Change: change,
    Validation: validation,
  };

  while (line != "Valid") {
    let [command, index, char] = line;
    let action = actions[command];
    if (Object.keys(actions).includes(command)) {
      action(index, char);
    }
    line = input.shift().split(" ");
  }

  function validation(map) {
    if (mail.length < 6) {
      console.log(`Email must be at least 6 characters long!`);
    }

    let onlyPattern = /^[A-Za-z0-9@]+$/gm;

    if (!onlyPattern.exec(mail)) {
      console.log(`Email must consist only of letters, digits and @!`);
    }

    let upperPattern = /[A-Z]{1,}/gm;

    if (!upperPattern.exec(mail)) {
      console.log(`Email must consist at least one uppercase letter!`);
    }

    let lowerPattern = /[a-z]{1,}/gm;

    if (!lowerPattern.exec(mail)) {
      console.log(`Email must consist at least one lowercase letter!`);
    }

    let digitPattern = /\d{1,}/gm;

    if (!digitPattern.exec(mail)) {
      console.log(`Email must consist at least one digit!`);
    }
  }

  function upper(index) {
    index = Number(index);
    mail = mail.replace(mail[index], mail[index].toUpperCase());
    console.log(mail);
  }

  function lower(index) {
    index = Number(index);
    mail = mail.replace(mail[index], mail[index].toLowerCase());
    console.log(mail);
  }

  function insert(index, char) {
    index = Number(index);
    let left = mail.slice(0, index);
    let right = mail.slice(index);
    mail = left + char + right;
    console.log(mail);
  }

  function change(index, char) {
    if (mail.includes(index)) {
      let inx = mail.indexOf(index);
      let currentASCI = mail.charCodeAt(inx);
      let newChar = Number(currentASCI) + Number(char);
      newChar = String.fromCharCode(newChar);
      mail = mail.split(index).join(newChar);
    }
    console.log(mail);
  }
}
solve([
  "invalidEmai@l-",
  "Validation",
  "Add 2 p",
  "Change i 7",
  "Change n -1",
  "Change * 6",
  "Upper 6",
  "Valid",
]);
