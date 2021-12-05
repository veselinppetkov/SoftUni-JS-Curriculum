function cone(radius, height) {
  let volume = ((Math.PI * Math.pow(radius, 2) * height) / 3).toFixed(4);
  let area = (
    Math.PI *
    radius *
    (radius + Math.sqrt(Math.pow(height, 2) + Math.pow(radius, 2)))
  ).toFixed(4);

  console.log(`volume = ${volume}`);
  console.log(`area = ${area}`);
}
cone(3, 5);
cone(3.3, 7.8);
