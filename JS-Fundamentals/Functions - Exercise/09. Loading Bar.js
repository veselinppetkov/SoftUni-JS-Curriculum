function loadingBar(num) {
  let bar = [];
  if (num === 100) {
    return `100% Complete!\n[%%%%%%%%%%]`;
  } else {
    for (let i = 0; i < num / 10; i++) {
      bar.push(String.fromCharCode(37));
    }

    for (let j = bar.length; j < 10; j++) {
      bar.push(".");
    }
  }
  return `${num}% [${bar.join("")}]\nStill loading...`;
}
console.log(loadingBar(90));
