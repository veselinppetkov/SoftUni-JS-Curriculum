function solve(input) {
  let command = input.shift();
  let pattern =
    /^%(?<customer>[A-Z][a-z]*)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+\.*\d*)\$$/;
  let income = 0;
  while (command !== "end of shift") {
    let match = pattern.exec(command); // .exec return array
    // console.log(match);
    /*[
        '%Maria%<Cola>|1|2.4$',
        'Maria',
        'Cola',
        '1',
        '2.4',
        index: 0,
        input: '%Maria%<Cola>|1|2.4$',
        groups: [Object: null prototype] {
        customer: 'Maria',
        product: 'Cola',
        count: '1',
        price: '2.4'}] */
    if (match !== null) {
      // if match is different than null
      let { customer, product, count, price } = match.groups; // we can destructing the groups object using match.groups
      // let name = match.groups['customer'];
      // let products = match.groups['product'];
      // let counts = Number(match.groups['count']);
      // let prices = Number(match.groups['price'])
      let totalPrice = Number(count) * Number(price);
      income += totalPrice;
      console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);
    }
    command = input.shift();
  }
  console.log(`Total income: ${income.toFixed(2)}`);
}
solve([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);
