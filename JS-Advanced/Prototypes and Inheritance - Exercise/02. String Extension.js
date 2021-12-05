(function stringExtension() {
  String.prototype.ensureStart = function (str) {
    if (!this.startsWith(str)) {
      return str + this;
    }
    return this;
  };
  String.prototype.ensureEnd = function (str) {
    if (!this.endsWith(str)) {
      return this + str;
    }
    return this;
  };
  String.prototype.isEmpty = function () {
    if (this.trim().length == 0) {
      return true;
    }
    return false;
  };

  String.prototype.truncate = function (n) {
    if (this.trim().length < n) {
      return this;
    }
  };
})();

str = str.ensureStart("my");
str = str.ensureStart("hello ");
str = str.ensureEnd(" hello");
str = console.log(str.isEmpty());
