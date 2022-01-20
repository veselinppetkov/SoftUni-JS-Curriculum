const observer = require(`./observer`);

function subscribe(data) {
  observer.on(`alert`, (data) => {
    console.log(`Event received`);
    console.log(data);
  });
}

subscribe();

// module.exports = subscribe;
