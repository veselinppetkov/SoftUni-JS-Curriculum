class SummerCamp {
  constructor(organizer, location) {
    this.organizer = organizer;
    this.location = location;
    this.priceForTheCamp = { child: 150, student: 300, collegian: 500 };
    this.listOfParticipants = [];
  }
  registerParticipant(name, condition, money) {
    money = Number(money);
    if (!this.priceForTheCamp.hasOwnProperty(condition)) {
      throw new Error(`Unsuccessful registration at the camp.`);
    }
    if (this.listOfParticipants.find((x) => x.name === name)) {
      return `The ${name} is already registered at the camp.`;
    }
    if (this.priceForTheCamp[condition] > money) {
      return `The money is not enough to pay the stay at the camp.`;
    }
    this.listOfParticipants.push({
      name,
      condition,
      power: 100,
      wins: 0,
    });
    return `The ${name} was successfully registered.`;
  }
  unregisterParticipant(name) {
    if (!this.listOfParticipants.find((x) => x.name === name)) {
      throw new Error(`The ${name} is not registered in the camp.`);
    }
    this.listOfParticipants = this.listOfParticipants.filter(
      (x) => x.name !== name
    );
    return `The ${name} removed successfully.`;
  }
  timeToPlay(typeOfGame, participant1, participant2) {
    let participant1Index = this.listOfParticipants.indexOf(
      this.listOfParticipants.find((x) => x.name == participant1)
    );

    let participant2Index = this.listOfParticipants.indexOf(
      this.listOfParticipants.find((x) => x.name == participant2)
    );

    if (typeOfGame == "WaterBalloonFights") {
      if (
        !this.listOfParticipants[participant1Index] ||
        !this.listOfParticipants[participant2Index]
      ) {
        throw new Error(`Invalid entered name/s.`);
      }

      if (
        this.listOfParticipants[participant1Index].condition !=
        this.listOfParticipants[participant2Index].condition
      ) {
        throw new Error(`Choose players with equal condition.`);
      }

      if (
        this.listOfParticipants[participant1Index].power >
        this.listOfParticipants[participant2Index].power
      ) {
        this.listOfParticipants[participant1Index].wins++;
        return `The ${participant1} is winner in the game ${typeOfGame}.`;
      } else if (
        this.listOfParticipants[participant1Index].power <
        this.listOfParticipants[participant2Index].power
      ) {
        this.listOfParticipants[participant2Index].wins++;
        return `The ${participant2} is winner in the game ${typeOfGame}.`;
      } else {
        return `There is no winner.`;
      }
    } else if (typeOfGame == "Battleship") {
      if (!this.listOfParticipants[participant1Index]) {
        throw new Error(`Invalid entered name/s.`);
      }

      this.listOfParticipants[participant1Index].power += 20;
      return `The ${participant1} successfully completed the game ${typeOfGame}.`;
    }
  }
  toString() {
    const resultArr = [
      `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`,
    ];

    this.listOfParticipants
      .sort((a, b) => b.wins - a.wins)
      .forEach((participant) => {
        resultArr.push(
          `${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`
        );
      });

    return resultArr.join("\n");
  }
}

const summerCamp = new SummerCamp(
  "Jane Austen",
  "Pancharevo Sofia 1137, Bulgaria"
);
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(
//   summerCamp.timeToPlay(
//     "WaterBalloonFights",
//     "Petar Petarson",
//     "Sara Dickinson"
//   )
// );
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(
  summerCamp.timeToPlay(
    "WaterBalloonFights",
    "Petar Petarson",
    "Dimitur Kostov"
  )
);

console.log(summerCamp.toString());
