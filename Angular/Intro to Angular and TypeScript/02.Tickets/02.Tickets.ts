class Ticket {
    constructor(
        public destination: string,
        public price: any,
        public status: string,
    ) {}
}

function ticketsManager(destination: string[], criteria: string) {

let data = [];

destination.forEach(d => {
    let [destination, price, status] = d.split("|")

    let direction = new Ticket(destination, price, status)

    data.push(direction)

})

if (criteria == "destination") {
    data = data.sort((a,b) => a.destination.localeCompare(b.destination))
    } else if (criteria == "price") {
        data = data.sort((a,b) => a.price-b.price)
    } else if (criteria == "status") {
        data = data.sort((a,b) => a.status.localeCompare(b.status))
    } else {
        console.log(`Invalid criteria`);
        return;
    }


console.log(data);

}

ticketsManager([
    'Philadelphia|94.20|available',
     'New York City|95.99|available',
     'New York City|95.99|sold',
     'Boston|126.20|departed'
    ],
    'destination')





    