function schedule(arr) {
  let flights = {};

  for (let fl of arr[0]) {
    let [number, destination] = fl.split(" ");
    flights[number] = { Destination: destination, Status: `Ready to fly` };
  }

  for (let fl of arr[1]) {
    let [number, status] = fl.split(" ");
    if (Object.keys(flights).includes(number)) {
      flights[number]["Status"] = status;
    }
  }

  let sorted = Object.values(flights).filter((a) => a.Status == arr[2]);

  for (let elements of sorted) {
    console.log(elements);
  }
}
schedule([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK430 Cancelled",
  ],
  ["Cancelled"],
]);
// schedule([
//   [
//     "WN269 Delaware",
//     "FL2269 Oregon",
//     "WN498 Las Vegas",
//     "WN3145 Ohio",
//     "WN612 Alabama",
//     "WN4010 New York",
//     "WN1173 California",
//     "DL2120 Texas",
//     "KL5744 Illinois",
//     "WN678 Pennsylvania",
//   ],
//   [
//     "DL2120 Cancelled",
//     "WN612 Cancelled",
//     "WN1173 Cancelled",
//     "SK330 Cancelled",
//   ],
//   ["Ready to fly"],
// ]);
