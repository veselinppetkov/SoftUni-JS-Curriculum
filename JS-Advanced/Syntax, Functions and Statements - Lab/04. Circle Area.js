function circleArea(radius) {
  if (typeof radius == "number") {
    let area = (radius ** 2 * Math.PI).toFixed(2);
    return area;
  } else {
    return `We can not calculate the circle area, because we receive a ${typeof radius}.`;
  }
}
console.log(circleArea(5));
console.log(circleArea("name"));
