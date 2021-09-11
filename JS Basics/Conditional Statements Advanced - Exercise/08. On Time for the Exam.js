function onTime(input) {
  let examHour = Number(input[0]);
  let examMins = Number(input[1]);
  let arrHour = Number(input[2]);
  let arrMins = Number(input[3]);

  let examTime = examHour * 60 + examMins;
  let arrTime = arrHour * 60 + arrMins;

  let difference = Math.abs(arrTime - examTime);
  let hoursDifference = Math.floor(difference / 60);
  let minsDifference = difference % 60;

  if (minsDifference === 0 || (minsDifference < 10 && hoursDifference>0)) {
minsDifference = `0${minsDifference}`; 
  }

  if (examTime == arrTime) {
    console.log("On time");
  } else if (examTime < arrTime && difference < 60) {
    console.log("Late");
    console.log(`${minsDifference} minutes after the start`);
  } else if (arrTime > examTime && difference >= 60) {
    console.log("Late");
    console.log(`${hoursDifference}:${minsDifference} hours after the start`);
  } else if (difference <= 30) {
    console.log("On time");
    console.log(`${minsDifference} minutes before the start`);
  } else if (difference > 30 && difference < 60) {
    console.log("Early");
    console.log(`${minsDifference} minutes before the start`);
  } else {
    console.log("Early");
    console.log(
      `${hoursDifference}:${minsDifference} hours before the start`
    );
  }
}
// onTime(["9", "30", "9", "50"]);
// onTime(["9", "00", "8", "30"]);
onTime(["16", "00", "15", "00"]);
// onTime(["9", "00", "10", "30"]);
// onTime(["14", "00", "13", "55"]);
// onTime(["11", "30", "8", "12"]);
// onTime(["10", "00", "10", "00"]);
// onTime(["11", "30", "12", "29"]);
