function encode(arr) {
  let word = arr.shift();
  let line = arr.shift().split("|");

  let actions = {
    Move: move,
    ChangeAll: changeAll,
    Insert: insert,
  };

  while (line != "Decode") {
    let [command, firstEl, secondEl] = line;
    let action = actions[command];
    action(firstEl, secondEl);
    line = arr.shift().split("|");
  }

  function move(firstEl) {
    let left = word.slice(0, firstEl);
    let right = word.slice(firstEl);
    word = right + left;
  }

  function insert(firstEl, secondEl) {
    let left = word.slice(0, firstEl);
    let right = word.slice(firstEl);
    word = left + secondEl + right;
  }

  function changeAll(firstEl, secondEl) {
    word = word.split(firstEl).join(secondEl);
  }

  console.log(`The decrypted message is: ${word}`);
}
encode(["owyouh", "Move|2", "Move|3", "Insert|3|are", "Insert|9|?", "Decode"]);
