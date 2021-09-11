function voleyball(input) {

  
  let yearType = input[0];
  let holidays = Number(input[1]);
  let weekendsInHomeTown = Number(input[2]);
  let weekendsIn1Year = 48;

  let weekendsInSofia = weekendsIn1Year - weekendsInHomeTown;
  weekendsInSofia *= 3/4

  let totalGames = weekendsInSofia+holidays*2/3+weekendsInHomeTown;

  if (yearType == "leap") {
      console.log(Math.floor(totalGames *= 1.15));
  } else {
      console.log(Math.floor(totalGames));
  }
}

voleyball(["leap", "5", "2"]);
voleyball(["normal","11","6"]);
voleyball(["normal","3","2"]);
