function cars(commands) {
  const objList = {};

  const processor = {
    create(name, inherits, target) {
      objList[name] = inherits ? Object.create(objList[target]) : {};
    },
    set(name, key, value) {
      objList[name][key] = value;
    },
    print(name) {
      const result = [];
      for (const key in objList[name]) {
        result.push(`${key}:${objList[name][key]}`);
      }
      console.log(result.join(","));
    },
  };

  for (let el of commands) {
    let [currentCommand, objName, x, z] = el.split(" ");
    processor[currentCommand](objName, x, z);
  }
}
cars([
  "create c1",
  "create c2 inherit c1",
  "set c1 color red",
  "set c2 model new",
  "print c1",
  "print c2",
]);
