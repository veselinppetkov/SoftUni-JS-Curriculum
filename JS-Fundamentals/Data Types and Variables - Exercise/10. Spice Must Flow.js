function spice(yield) {
  let storaged = 0;
  let days = 0;

  while (yield >= 100) {
    storaged += yield;
    storaged -= 26;
    days++;
    yield -= 10;
  }

  if (storaged >= 26) {
    storaged -= 26;
  }

  console.log(days);
  console.log(storaged);
}
spice(111);
spice(450);
spice(-1);
