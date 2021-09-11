function swimming(input) {

    let recordInS = Number(input[0]);
    let distanceInM = Number(input[1]);
    let secondsPerM = Number(input[2]);

    let WRinSec = distanceInM*secondsPerM;
    let resistance = Math.floor(distanceInM/15)*12.5;
    totalTime = WRinSec + resistance;

    if (totalTime < recordInS) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${Math.abs(recordInS-totalTime).toFixed(2)} seconds slower.`)
    }

}

swimming(["10464", "1500", "20"]);
swimming(["55555.67", "3017", "5.03"]);
