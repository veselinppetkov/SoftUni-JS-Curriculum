function createDictionary(terms) {
  let dictObject = {};
  let keysList = [];
  let valuesList = [];
  class Dictionary {
    constructor(term, definition) {
      this.term = term;
      this.definition = definition;
    }
  }
  for (term of terms) {
    let termObject = JSON.parse(term);
    Object.assign(dictObject, termObject);
  }
  let entries = Object.entries(dictObject);
  for ([key, value] of entries) {
    keysList.push(key);
    valuesList.push(value);
  }
  keysList.sort();
  for (let i = 0; i < keysList.length; i++) {
    console.log(
      `Term: ${keysList[i]} => Definition: ${dictObject[keysList[i]]}`
    );
  }
}
createDictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
