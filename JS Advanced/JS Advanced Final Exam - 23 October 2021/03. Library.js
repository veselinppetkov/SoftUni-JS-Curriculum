const library = require(`./library`);
const { expect } = require(`chai`);

describe(`Test package`, () => {
  describe(`calcPriceOfBook method`, () => {
    it(`should throw error if input is invalid`, () => {
      expect(() => library.calcPriceOfBook(1, 1984)).to.throw();
      expect(() => library.calcPriceOfBook("Test", 3.5)).to.throw();
      expect(() => library.calcPriceOfBook("Test", -3.5)).to.throw();
      expect(() => library.calcPriceOfBook(null, 1984)).to.throw();
      expect(() => library.calcPriceOfBook(1984)).to.throw();
      expect(() => library.calcPriceOfBook([], 1984)).to.throw();
      expect(() => library.calcPriceOfBook(undefined, 1984)).to.throw();
      expect(() => library.calcPriceOfBook("Test book", "1")).to.throw();
      expect(() => library.calcPriceOfBook("Test book", [1, 2, 3])).to.throw();
      expect(() => library.calcPriceOfBook("Test book", null)).to.throw();
      expect(() => library.calcPriceOfBook("Test book", 1)).to.not.throw();
    });

    it(`it should give a discount if the year is less than or equal to 1980`, () => {
      expect(library.calcPriceOfBook("Godfather", 1980)).to.equal(
        `Price of Godfather is 10.00`
      );
    });

    it(`it should give a discount if the year is less than or equal to 1980`, () => {
      expect(library.calcPriceOfBook("Godfather", 1975)).to.equal(
        `Price of Godfather is 10.00`
      );
    });

    it(`it should give a discount if the year is less than or equal to 1980`, () => {
      expect(library.calcPriceOfBook("Godfather", 1981)).to.equal(
        `Price of Godfather is 20.00`
      );
    });
  });

  describe(`findBook method`, () => {
    it(`should throw an error if length is 0`, () => {
      expect(() => library.findBook([], "Troy")).to.throw();
      expect(() => library.findBook("Troy")).to.throw();
      expect(() => library.findBook(null, "Troy")).to.throw();
    });
    it(`should found the book if present in the array`, () => {
      expect(library.findBook(["Troy", "Torronto"], "Troy")).to.equal(
        `We found the book you want.`
      );
      expect(library.findBook(["Troy"], "Troy")).to.equal(
        `We found the book you want.`
      );
    });

    it(`should not found the book if not present in the array`, () => {
      expect(library.findBook(["Troy", "Torronto"], "Godfather")).to.equal(
        `The book you are looking for is not here!`
      );
      expect(library.findBook(["Troy", "Torronto"], 1)).to.equal(
        `The book you are looking for is not here!`
      );

      expect(library.findBook(["Troy", "Torronto"], "")).to.equal(
        `The book you are looking for is not here!`
      );

      expect(library.findBook(["Troy"], 1)).to.equal(
        `The book you are looking for is not here!`
      );
    });
  });

  describe(`arrangeTheBooks method`, () => {
    it(`should throw invalid if input is not an integer`, () => {
      expect(() => library.arrangeTheBooks(-1)).to.throw();
      expect(() => library.arrangeTheBooks("1")).to.throw();
      expect(() => library.arrangeTheBooks([])).to.throw();
      expect(() => library.arrangeTheBooks("test")).to.throw();
      expect(() => library.arrangeTheBooks("")).to.throw();
      expect(() => library.arrangeTheBooks(3.5)).to.throw();
      expect(() => library.arrangeTheBooks(-3.5)).to.throw();
    });

    it(`should be valid if all the books are arranged on the shelves`, () => {
      expect(library.arrangeTheBooks(5)).to.equal(
        `Great job, the books are arranged.`
      );
      expect(library.arrangeTheBooks(40)).to.equal(
        `Great job, the books are arranged.`
      );
    });

    it(`should be invalid if there is no space`, () => {
      expect(library.arrangeTheBooks(41)).to.equal(
        `Insufficient space, more shelves need to be purchased.`
      );
      expect(library.arrangeTheBooks(105)).to.equal(
        `Insufficient space, more shelves need to be purchased.`
      );
    });
  });
});
