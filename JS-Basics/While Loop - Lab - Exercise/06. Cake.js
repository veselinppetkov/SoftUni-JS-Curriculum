function cake(input) {

    let a = Number(input[0]);
    let b = Number(input[1]);
    let size = a*b;
    i=2;
    let pieces = input[i];
    let piecesSum = 0;

    while (pieces!=="STOP") {
        piecesSum+=Number(input[i]);
        pieces = input[++i];
        if (size<piecesSum) {
        console.log(`No more cake left! You need ${piecesSum-size} pieces more.`)
        return;
        }
    }
console.log(`${size-piecesSum} pieces are left.`)
    


}
cake(["10", "10", "20", "20", "20", "20", "21"]);
cake(["10", "2", "2", "4", "6", "STOP"]);
