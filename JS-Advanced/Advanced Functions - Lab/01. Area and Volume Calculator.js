function calculator(area, vol, input) {
  return JSON.parse(input).map((cordinates) => ({
    area: Math.abs(area.apply(cordinates)),
    volume: Math.abs(vol.apply(cordinates)),
  }));
}

function area() {
  return Math.abs(this.x * this.y);
}

function vol() {
  return Math.abs(this.x * this.y * this.z);
}

console.log(
  calculator(
    area,
    vol,
    `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
  )
);
