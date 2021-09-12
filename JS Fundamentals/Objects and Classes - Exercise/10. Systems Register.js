function systems(arr) {
  let register = {};
  for (let el of arr) {
    let [system, component, subcomponent] = el.split(" | ");
    if (!Object.keys(register).includes(system)) {
      register[system] = {};
      register[system][component] = [];
    } else {
      if (!register[system].hasOwnProperty(component)) {
        register[system][component] = [];
      }
    }
    register[system][component].push(subcomponent);
  }

  let sortedKeys = Object.keys(register).sort(
    (a, b) =>
      Object.keys(register[b]).length - Object.keys(register[a]).length ||
      a.localeCompare(b)
  );

  sortedKeys.forEach((key) => {
    console.log(key);
    let sortedComps = Object.keys(register[key]).sort(
      (a, b) =>
        Object.keys(register[key][b]).length -
        Object.keys(register[key][a]).length
    );
    sortedComps.forEach((subKey) => {
      console.log(`|||${subKey}`);
      register[key][subKey].forEach((comp) => {
        console.log(`||||||${comp}`);
      });
    });
  });
}
systems([
  "SULS | Main Site | Home Page",
  "SULS | Main Site | Login Page",
  "SULS | Main Site | Register Page",
  "SULS | Judge Site | Login Page",
  "SULS | Judge Site | Submittion Page",
  "Lambda | CoreA | A23",
  "SULS | Digital Site | Login Page",
  "Lambda | CoreB | B24",
  "Lambda | CoreA | A24",
  "Lambda | CoreA | A25",
  "Lambda | CoreC | C4",
  "Indice | Session | Default Storage",
  "Indice | Session | Default Security",
]);
