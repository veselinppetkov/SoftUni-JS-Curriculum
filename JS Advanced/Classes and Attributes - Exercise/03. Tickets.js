function tickets(data, criteria) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }

  const resultArr = [];
  data.forEach((el) => {
    let [destination, price, status] = el.split("|");
    price = Number(price);
    resultArr.push(new Ticket(destination, price, status));
  });

  if (criteria == "price") {
    resultArr.sort((a, b) => a.price - b.price);
  } else if (criteria == "destination") {
    resultArr.sort((a, b) => a.destination.localeCompare(b.destination));
  } else {
    resultArr.sort((a, b) => a.status.localeCompare(b.status));
  }
  return resultArr;
}

tickets(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "destination"
);
console.log(`---------------------`);
tickets(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "status"
);
