const fs = require(`fs`);

const readableStream = fs.createReadStream(`./index.html`, {
  encoding: "utf-8",
  highWaterMark: 10,
});

readableStream.on(`data`, (chunk) => {
  console.log(`Chunk>>>`, chunk);
});

readableStream.on(`end`, () => {
  console.log(`Successfully transmitted`);
});
