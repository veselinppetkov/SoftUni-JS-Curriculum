function pianist(input) {
  let initialPieces = Number(input.shift());
  let collection = {};

  let actions = {
    Add: add,
    Remove: remove,
    ChangeKey: changeKey,
  };

  for (let i = 0; i < initialPieces; i++) {
    let [piece, composer, key] = input.shift().split("|");
    collection[piece] = { composer: composer, key: key };
  }

  let line = input.shift().split("|");

  while (line != "Stop") {
    let [command, piece, composer, key] = line;
    let action = actions[command];
    action(piece, composer, key);
    line = input.shift().split("|");
  }

  function add(piece, composer, key) {
    if (collection.hasOwnProperty(piece)) {
      console.log(`${piece} is already in the collection!`);
    } else {
      collection[piece] = { composer: composer, key: key };
      console.log(`${piece} by ${composer} in ${key} added to the collection!`);
    }
  }

  function remove(piece) {
    if (collection.hasOwnProperty(piece)) {
      delete collection[piece];
      console.log(`Successfully removed ${piece}!`);
    } else {
      console.log(
        `Invalid operation! ${piece} does not exist in the collection.`
      );
    }
  }

  function changeKey(piece, newKey) {
    if (collection.hasOwnProperty(piece)) {
      collection[piece].key = newKey;
      console.log(`Changed the key of ${piece} to ${newKey}!`);
    } else {
      console.log(
        `Invalid operation! ${piece} does not exist in the collection.`
      );
    }
  }

  let sorted = Object.entries(collection).sort(
    (a, b) =>
      a[0].localeCompare(b[0]) || a[1].composer.localeCompare(b[1].composer)
  );

  for (let [name, piece] of sorted) {
    console.log(`${[name]} -> Composer: ${piece.composer}, Key: ${piece.key}`);
  }
}
pianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
