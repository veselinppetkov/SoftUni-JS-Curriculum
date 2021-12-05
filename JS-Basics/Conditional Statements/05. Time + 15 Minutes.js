function time(input) {

    let h = Number(input[0]);
    let m = Number(input[1]);

    let totalM = h*60 + m; 
    let totalMinAfter = totalM + 15;

    let finalHours = Math.floor(totalMinAfter / 60);
    
    if (finalHours > 23) {
        finalHours = 0;
    } 

    let finalMin = Math.floor(totalMinAfter % 60);

    if (finalMin < 10) {
        console.log(`${finalHours}:0${finalMin}`);
    } else {
    console.log(`${finalHours}:${finalMin}`)
}
    }
    

time(["1", "46"]);
time(["0", "01"]);
time(["23", "59"]);
time(["11", "08"]);
time(["12", "49"]);
