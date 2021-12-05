function passwordValidator(pass) {
  let isTrue = true;

  function length(pass) {
    if (pass.length >= 6 && pass.length <= 10) {
      return isTrue;
    } else {
      console.log(`Password must be between 6 and 10 characters`);
    }
  }

  function chars(pass) {
    for (let char of pass) {
      let charAsCode = char.charCodeAt(0);
      if (
        !(charAsCode >= 48 && charAsCode <= 57) &&
        !(charAsCode >= 65 && charAsCode <= 90) &&
        !(charAsCode >= 97 && charAsCode <= 122)
      ) {
        console.log(`Password must consist only of letters and digits`);
        return;
      }
    }
    return isTrue;
  }

  function digits(pass) {
    let digitCounter = 0;
    for (let char of pass) {
      let charAsCode = char.charCodeAt(0);
      if (charAsCode >= 48 && charAsCode <= 57) {
        digitCounter++;
      }
    }

    if (digitCounter < 2) {
      console.log(`Password must have at least 2 digits`);
    } else {
      return isTrue;
    }
  }

  let isLengthValid = length(pass);
  let isCharsValid = chars(pass);
  let isDigitsValid = digits(pass);

  if (isLengthValid && isCharsValid && isDigitsValid) {
    console.log(`Password is valid`);
    return;
  }
}
passwordValidator("MyPass123");
// passwordValidator("MyPass123");
