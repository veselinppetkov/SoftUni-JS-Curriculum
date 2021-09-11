function movie(input) {

    let budget = Number(input[0]);
    let stuntmen = Number(input[1]);
    let priceClothPerArtist = Number(input[2]);

    let decor = budget*0.10; 
    let clothing = stuntmen*priceClothPerArtist;

    if (stuntmen > 150) {
        clothing *= 0.9;
    }

    let totalCosts = decor+clothing;

    if (totalCosts > budget) {
        let moneyNeeded = totalCosts - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    } else {
        let moneyLeft = budget - totalCosts; 
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }

}
movie(["20000", "120", "55.5"]);
movie(["15437.62", "186", "57.99"]);
movie(["9587.88", "222", "55.68"]);
