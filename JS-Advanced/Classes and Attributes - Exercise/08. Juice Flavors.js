function juiceFlavors(input) {
  const juiceMap = new Map();
  const resultObj = {};
  input.forEach((el) => {
    let [name, quantity] = el.split(" => ");
    quantity = Number(quantity);
    if (!juiceMap.has(name)) {
      juiceMap.set(name, quantity);
    } else {
      quantity += juiceMap.get(name);
      juiceMap.set(name, quantity);
    }
    if (juiceMap.get(name) >= 1000) {
      let bottles = Math.trunc(juiceMap.get(name) / 1000);
      if (!resultObj[name]) {
        resultObj[name] = 0;
      }
      resultObj[name] += bottles;
      juiceMap.set(name, quantity % 1000);
    }
  });

  Object.entries(resultObj).forEach(([key, value]) =>
    console.log(`${key} => ${value}`)
  );
}

juiceFlavors([
  "Kiwi => 234",
  "Pear => 2345",
  "Watermelon => 3456",
  "Kiwi => 4567",
  "Pear => 5678",
  "Watermelon => 6789",
]);
