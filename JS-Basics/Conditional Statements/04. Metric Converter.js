function convertor (input) {

    let num = Number(input[0]);
    let inputR = input[1];
    let outputR = input [2];

    if (inputR === "mm" && outputR === "m") {
        num = num/1000;
    } else if (inputR === "m" && outputR === "mm") {
        num = num*1000;
    } else if (inputR === "cm" && outputR === "m") {
        num = num/100;
    } else if (inputR === "m" && outputR === "cm") {
        num = num*100; 
    } else if (inputR === "cm" && outputR === "mm") {
        num = num*10;
    } else if (inputR === "mm" && outputR === "cm") {
        num = num/10;
    }
    console.log(num.toFixed(3));

}

convertor(["12","mm","m"]);
convertor(["150","m","cm"]);
convertor(["45","cm","mm"]);