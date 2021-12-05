function outfit(input) {
  let degrees = Number(input[0]);
  let timeOfTheDay = input[1];

  if (timeOfTheDay == "Morning") {
    if (10 <= degrees && degrees <= 18) {
      console.log(`It's ${degrees} degrees, get your Sweatshirt and Sneakers.`);
    } else if (18 < degrees && degrees <= 24) {
      console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
    } else if (degrees >= 25) {
      console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`);
    }
  }

  if (timeOfTheDay == "Afternoon") {
    if (10 <= degrees && degrees <= 18) {
      console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
    } else if (18 < degrees && degrees <= 24) {
      console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`);
    } else if (degrees >= 25) {
      console.log(`It's ${degrees} degrees, get your Swim Suit and Barefoot.`);
    }
  }

  if (timeOfTheDay == "Evening") {
    console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
  }
}

outfit(["16", "Morning"]);
outfit(["22", "Afternoon"]);
