const uniqid = require(`uniqid`);

class Cube {
  static #cubes = [
    {
      id: uniqid(),
      name: "Ice Cube",
      description: "A rapper",
      imageUrl: "https://bit.ly/3IVdQxD",
      difficultyLevel: "5",
    },
  ];

  constructor(name, description, imageUrl, difficultyLevel) {
    this.id = uniqid();
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.difficultyLevel = difficultyLevel;
  }

  static get cubes() {
    return Cube.#cubes.slice();
  }

  static addCube(cube) {
    Cube.#cubes.push(cube);
  }
}

module.exports = Cube;
