function toyShop(args) {

let tripPrice = Number(args[0]);
let puzzles = Number(args[1]);
let dolls = Number(args[2]);
let bears = Number(args[3]);
let minions = Number(args[4]);
let trucks = Number(args[5]);

let puzzlesPrice = 2.60;
let dollsPrice = 3;
let bearsPrice = 4.10; 
let minionsPrice = 8.20;
let trucksPrice = 2;

let toysCount = puzzles+dolls+bears+trucks+minions;
let totalSum = puzzles*puzzlesPrice + dolls*dollsPrice + bears*bearsPrice + trucks*trucksPrice + minions*minionsPrice; 

if (toysCount >= 50) {
    totalSum = totalSum - (totalSum*0.25);
} 
    sumAfterRent = totalSum - (totalSum*0.10);

    if(sumAfterRent >= tripPrice) {
        console.log(`Yes! ${(sumAfterRent-tripPrice).toFixed(2)} lv left.`);
    } else { 
    console.log(`Not enough money! ${Math.abs(sumAfterRent-tripPrice).toFixed(2)} lv needed.`);
} 
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);