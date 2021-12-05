function sort(arr) {
  function sorting(a, b) {
    return a.length - b.length || a.localeCompare(b);
  }
  console.log(arr.sort(sorting).join("\n"));
}
sort(["alpha", "beta", "gamma"]);
sort(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
sort(["test", "Deny", "omen", "Default"]);
