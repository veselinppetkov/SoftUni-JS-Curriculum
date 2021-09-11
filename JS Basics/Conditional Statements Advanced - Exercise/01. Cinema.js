function cinema(input) {
  let typeOfProjection = input[0];
  let rows = Number(input[1]);
  let columns = Number(input[2]);

  let price = 0;

  switch (typeOfProjection) {
    case "Premiere":
      price = rows * columns * 12;
      break;

    case "Normal":
      price = rows * columns * 7.5;
      break;

    case "Discount":
      price = rows * columns * 5;
      break;
  }

  console.log(price.toFixed(2));
}
cinema(["Premiere", "10", "12"]);
cinema(["Normal", "21", "13"]);
cinema(["Discount", "12", "30"]);
