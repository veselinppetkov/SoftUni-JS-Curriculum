function sleepyTomCat(input) {
  let restDays = Number(input[0]);
  let restPlay = 127;
  let workingPlay = 63;
  let norm = 30000;
  let workingDays = 365 - restDays;

  let totalPlay = workingDays * workingPlay + restDays * restPlay;
  let diff = Math.abs(norm - totalPlay);
  let h = diff / 60;
  let m = diff % 60;

  if (norm > totalPlay) {
    console.log(`Tom sleeps well`);
    console.log(`${Math.floor(h)} hours and ${m} minutes less for play`);
  } else {
    console.log(`Tom will run away`);
    console.log(
      `${Math.floor(h)} hours and ${Math.abs(m)} minutes more for play`
    );
  }
}
sleepyTomCat(["20"]);
sleepyTomCat(["113"]);
sleepyTomCat(["75"]);
