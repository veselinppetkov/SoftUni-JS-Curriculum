const PaymentPackage = require(`./12. Payment Package`);
const { expect } = require(`chai`);

describe(`Test Package`, () => {
  describe(`isName`, () => {
    it("Constructor", () => {
      let instance = new PaymentPackage("Name", 100);
      expect(instance._name).to.equal("Name", "1");
      expect(instance._value).to.equal(100, "3");
      expect(instance._VAT).to.equal(20, "4");
      expect(instance._active).to.equal(true, "5");
    });

    it(`Name throws an error as a number`, () => {
      expect(() => new PaymentPackage(123, 123)).to.throw(
        "Name must be a non-empty string"
      );
    });
    it(`Name throws an error as an array`, () => {
      expect(() => new PaymentPackage(["hi"], 123)).to.throw(
        "Name must be a non-empty string"
      );
    });
    it(`Name throws an error as empty string`, () => {
      expect(() => new PaymentPackage("", 123)).to.throw(
        "Name must be a non-empty string"
      );
    });
    it(`Name throws an error as undefined`, () => {
      expect(() => new PaymentPackage(undefined, 123)).to.throw(
        "Name must be a non-empty string"
      );
    });
    it(`Valid name`, () => {
      expect(() => new PaymentPackage("KTB", 123)).to.not.throw(
        "Name must be a non-empty string"
      );
    });
  });

  describe(`isValue`, () => {
    it(`Value throws an error as a string`, () => {
      expect(() => new PaymentPackage("KTB", "123")).to.throw(
        "Value must be a non-negative number"
      );
    });

    it(`Value throws an error as an array`, () => {
      expect(() => new PaymentPackage("KTB", [123])).to.throw(
        "Value must be a non-negative number"
      );
    });

    it(`Value throws an error as undefined`, () => {
      expect(() => new PaymentPackage("KTB", undefined)).to.throw(
        "Value must be a non-negative number"
      );
    });

    it(`Value throws an error as a negative number`, () => {
      expect(() => new PaymentPackage("KTB", -1)).to.throw(
        "Value must be a non-negative number"
      );
    });

    it(`Valid value #1`, () => {
      expect(() => new PaymentPackage("KTB", 1)).to.not.throw(
        "Value must be a non-negative number"
      );
    });

    it(`Valid value #2`, () => {
      expect(() => new PaymentPackage("KTB", 0)).to.not.throw(
        "Value must be a non-negative number"
      );
    });

    describe(`isVAT`, () => {
      it(`VAT throws an error as a string`, () => {
        let payment = new PaymentPackage("KTB", 123);
        expect(() => (payment.VAT = "abc")).to.throw(
          "VAT must be a non-negative number"
        );
      });

      it(`VAT throws an error as an array`, () => {
        let payment = new PaymentPackage("KTB", 123);
        expect(() => (payment.VAT = [123])).to.throw(
          "VAT must be a non-negative number"
        );
      });

      it(`VAT throws an error as empty`, () => {
        let payment = new PaymentPackage("KTB", 123);
        expect(() => (payment.VAT = "")).to.throw(
          "VAT must be a non-negative number"
        );
      });

      it(`VAT throws an error as negative number`, () => {
        let payment = new PaymentPackage("KTB", 123);
        expect(() => (payment.VAT = -20)).to.throw(
          "VAT must be a non-negative number"
        );
      });

      it(`Valid VAT`, () => {
        let payment = new PaymentPackage("KTB", 123);
        expect(() => (payment.VAT = 20)).to.not.throw(
          "VAT must be a non-negative number"
        );
      });

      describe(`isActive`, () => {
        it(`Active throws and error as number`, () => {
          let payment = new PaymentPackage("KTB", 123);
          expect(() => (payment.active = 20)).to.throw(
            "Active status must be a boolean"
          );
        });

        it(`Active throws and error as string`, () => {
          let payment = new PaymentPackage("KTB", 123);
          expect(() => (payment.active = "20")).to.throw(
            "Active status must be a boolean"
          );
        });

        it(`Active throws and error as array`, () => {
          let payment = new PaymentPackage("KTB", 123);
          expect(() => (payment.active = [123])).to.throw(
            "Active status must be a boolean"
          );
        });

        it(`isActive`, () => {
          let payment = new PaymentPackage("KTB", 123);
          expect(() => (payment.active = true)).to.not.throw(
            "Active status must be a boolean"
          );
        });
      });

      describe(`isToString`, () => {
        it("toStringValid #1", () => {
          let payment = new PaymentPackage("abc", 123);
          let output = [
            `Package: abc`,
            `- Value (excl. VAT): 123`,
            `- Value (VAT 20%): 147.6`,
          ];
          expect(payment.toString()).to.equal(output.join("\n"));
        });
        it("toStringValid #2", () => {
          let payment = new PaymentPackage("abc", 123);
          payment.VAT = 30;
          let output = [
            `Package: abc`,
            `- Value (excl. VAT): 123`,
            `- Value (VAT 30%): 159.9`,
          ];
          expect(payment.toString()).to.equal(output.join("\n"));
        });

        it("toStringValid #3", () => {
          let pament = new PaymentPackage("abc", 123);
          pament.active = false;
          let output = [
            `Package: abc (inactive)`,
            `- Value (excl. VAT): 123`,
            `- Value (VAT 20%): 147.6`,
          ];
          expect(pament.toString()).to.equal(output.join("\n"));
        });

        it("toStringValid #4", () => {
          let payment = new PaymentPackage("abc", 123);
          payment.VAT = 30;
          payment.active = false;
          let output = [
            `Package: abc (inactive)`,
            `- Value (excl. VAT): 123`,
            `- Value (VAT 30%): 159.9`,
          ];
          expect(payment.toString()).to.equal(output.join("\n"));
        });
      });
    });
  });
});
