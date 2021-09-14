function squareOfStars(input) {
  let print = "";
  if (input == undefined) {
    input = 5;
  }

  for (let row = 0; row < input; row++) {
    for (let columns = 0; columns < input; columns++) {
      print += "* ";
    }
    print += "\n";
  }
  console.log(print);
}
squareOfStars();
squareOfStars(2);
