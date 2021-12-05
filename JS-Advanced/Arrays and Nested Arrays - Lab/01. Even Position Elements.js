function evenEls(arr) {
  console.log(arr.filter((x, i) => i % 2 == 0).join(" "));
}
evenEls(["20", "30", "40", "50", "60"]);
