function meetings(list) {
  let schedule = {};

  for (let tokens of list) {
    let [day, name] = tokens.split(" ");

    if (schedule.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      schedule[day] = name;
      console.log(`Scheduled for ${day}`);
    }
  }
  for (let [day, name] of Object.entries(schedule)) {
    console.log(`${day} -> ${name}`);
  }
}
meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
