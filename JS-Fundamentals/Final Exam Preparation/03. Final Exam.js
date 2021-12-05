function solve(input) {
  let actions = {
    Deliver: deliver,
    Return: back,
    Sell: sell,
  };

  let distributors = {};
  let clients = {};
  let totalMoney = 0;

  let line = input.shift().split(" ");

  while (line != "End") {
    let [command, distributor, money] = line;
    let action = actions[command];
    action(distributor, money);
    line = input.shift().split(" ");
  }

  function deliver(distributor, money) {
    money = Number(money);
    if (!distributors.hasOwnProperty(distributor)) {
      distributors[distributor] = money;
    } else {
      distributors[distributor] += money;
    }
  }

  function back(distributor, money) {
    money = Number(money);
    if (
      distributors.hasOwnProperty(distributor) &&
      distributors[distributor] >= money
    ) {
      distributors[distributor] -= money;
    }
    if (distributors[distributor] == 0) {
      delete distributors[distributor];
    }
  }

  function sell(client, money) {
    money = Number(money);
    if (!clients.hasOwnProperty(client)) {
      clients[client] = money;
      totalMoney += money;
    } else {
      clients[client] += money;
      totalMoney += money;
    }
  }

  let sortedClients = Object.entries(clients).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  let sortedDistributors = Object.entries(distributors).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (let [client, money] of sortedClients) {
    console.log(`${client}: ${money.toFixed(2)}`);
  }
  console.log(`-----------`);
  for (let [distributor, money] of sortedDistributors) {
    console.log(`${distributor}: ${money.toFixed(2)}`);
  }
  console.log(`-----------`);
  console.log(`Total Income: ${totalMoney.toFixed(2)}`);
}
solve([
  "Deliver North 200.30",
  "Sell Peter 30.20",
  "Return Macro 5000.00",
  "Return North 100.30",
  "Sell Peter 50.50",
  "End",
]);
// solve([
//   "Deliver Micro 10000.00",
//   "Sell Nick 500.00",
//   "Sell Antony 260.50",
//   "Deliver Micro 2000.50",
//   "End",
// ]);
