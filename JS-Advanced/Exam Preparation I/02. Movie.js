class Movie {
  constructor(movieName, ticketPrice) {
    this.movieName = movieName;
    this.ticketPrice = Number(ticketPrice);
    this.screenings = [];
    this.ticketsSold = 0;
    this.revenue = 0;
  }
  newScreening(date, hall, description) {
    if (this.screenings.some((s) => s.date == date && s.hall == hall)) {
      throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
    }
    this.screenings.push({
      date,
      hall,
      description,
    });
    return `New screening of ${this.movieName} is added.`;
  }

  endScreening(date, hall, soldTickets) {
    let match = this.screenings.find((s) => s.date == date && s.hall == hall);
    if (!match) {
      throw new Error(
        `Sorry, there is no such screening for ${this.movieName} movie.`
      );
    }
    const index = this.screenings.indexOf(match);
    this.screenings.splice(index, 1);
    const currentProfit = soldTickets * this.ticketPrice;

    this.ticketsSold += soldTickets;
    this.revenue += currentProfit;

    return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`;
  }

  toString() {
    const resultArr = [];
    resultArr.push(`${this.movieName} full information:`);
    resultArr.push(`Total profit: ${this.revenue.toFixed(0)}$`);
    resultArr.push(`Sold Tickets: ${this.ticketsSold}`);
    if (this.screenings.length == 0) {
      resultArr.push(`No more screenings!`);
    } else {
      resultArr.push(`Remaining film screenings:`);
      this.screenings
        .sort((a, b) => a.hall.localeCompare(b.hall))
        .forEach((movie) =>
          resultArr.push(`${movie.hall} - ${movie.date} - ${movie.description}`)
        );
    }
    return resultArr.join("\n");
  }
}

let m = new Movie("Wonder Woman 1984", "10.00");
console.log(m.newScreening("October 2, 2020", "IMAX 3D", `3D`));
console.log(m.newScreening("October 3, 2020", "Main", `regular`));
console.log(m.newScreening("October 4, 2020", "IMAX 3D", `3D`));
console.log(m.endScreening("October 2, 2020", "IMAX 3D", 150));
console.log(m.endScreening("October 3, 2020", "Main", 78));
console.log(m.toString());
console.log(`-----------------------------`);
m.newScreening("October 4, 2020", "235", `regular`);
m.newScreening("October 5, 2020", "Main", `regular`);
m.newScreening("October 3, 2020", "235", `regular`);
m.newScreening("October 4, 2020", "Main", `regular`);
console.log(m.toString());
