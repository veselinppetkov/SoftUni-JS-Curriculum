function vacation(group, type, day) {
  let totalPrice = 0;

  if (type == "Business" && group >= 100) {
    group -= 10;
  }

  switch (day) {
    case "Friday":
      if (type == "Students") {
        totalPrice = group * 8.45;
        if (group >= 30) {
          totalPrice *= 0.85;
        }
        break;
      } else if (type == "Business") {
        totalPrice = group * 10.9;
        break;
      } else if (type == "Regular") {
        totalPrice = group * 15;
        if (group >= 10 && group <= 20) {
          totalPrice *= 0.95;
        }
        break;
      }
    case "Saturday":
      if (type == "Students") {
        totalPrice = group * 9.8;
        if (group >= 30) {
          totalPrice *= 0.85;
        }
        break;
      } else if (type == "Business") {
        totalPrice = group * 15.6;
        break;
      } else if (type == "Regular") {
        totalPrice = group * 20;
        if (group >= 10 && group <= 20) {
          totalPrice *= 0.95;
        }
        break;
      }
    case "Sunday":
      if (type == "Students") {
        totalPrice = group * 10.46;
        if (group >= 30) {
          totalPrice *= 0.85;
        }
        break;
      } else if (type == "Business") {
        totalPrice = group * 16;
        break;
      } else if (type == "Regular") {
        totalPrice = group * 22.5;
        if (group >= 10 && group <= 20) {
          totalPrice *= 0.95;
        }
        break;
      }
  }
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
