function convert(name, lastName, hairColor) {
  let obj = {
    name,
    lastName,
    hairColor,
  };

  let json = JSON.stringify(obj);

  console.log(json);
}

convert("George", "Jones", "Brown");
