const { subscribe, publish } = require(`./index.js`);

subscribe(`eventOccured`, (data) => {
  console.log(`Chunk >>>>`, data);
});

publish(`eventOccured`, `Here we go again!`);
