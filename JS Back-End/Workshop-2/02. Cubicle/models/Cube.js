class Cube {
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
