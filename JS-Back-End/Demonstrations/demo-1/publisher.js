const observer = require(`./observer`);

function publish(index) {
  observer.emit(`alert`, `Publishing event. Published ${index} times.`);
}

module.exports = publish;
