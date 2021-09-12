function tseamAccount(arr) {
  let actions = {
    Install: install,
    Uninstall: uninstall,
    Update: update,
    Expansion: expansion,
  };

  let games = arr.shift().split(" ");
  let line = arr.shift().split(" ");

  while (line != "Play!") {
    let action = actions[line[0]];
    action(line[1]);
    line = arr.shift().split(" ");
  }

  function install(game) {
    if (!games.includes(game)) {
      games.push(game);
    }
  }

  function uninstall(game) {
    if (games.includes(game)) {
      games.splice(games.indexOf(game), 1);
    }
  }

  function update(game) {
    if (games.includes(game)) {
      let play = games.splice(games.indexOf(game), 1);
      games.push(play.toString());
    }
  }

  function expansion(game) {
    let play = game.split("-");
    if (games.includes(play[0])) {
      games.splice(games.indexOf(play[0]) + 1, 0, play.join(":"));
    }
  }

  console.log(games.join(" "));
}
tseamAccount([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
tseamAccount([
  "CS WoW Diablo",
  "Uninstall XCOM",
  "Update PeshoGame",
  "Update WoW",
  "Expansion Civ-V",
  "Play!",
]);
