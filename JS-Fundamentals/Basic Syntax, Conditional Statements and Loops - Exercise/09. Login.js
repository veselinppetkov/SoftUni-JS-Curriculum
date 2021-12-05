function login(input) {
  let username = input.shift();
  let password = username.split("");
  password = password.reverse();
  password = password.join("");

  let counter = 1;

  while (true) {
    let currentPassword = input.shift();
    counter++;

    if (currentPassword !== password) {
      console.log(`Incorrect password. Try again.`);
    } else {
      console.log(`User ${username} logged in.`);
      break;
    }
    if (counter == 4) {
      console.log(`User ${username} blocked!`);
      break;
    }
  }
}

login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
