function pyramid (input) {

let target = Number(input[0]);
let current = 0;
let isBigger = false;

for (let rows = 1; rows<=target; rows++) {
    let print = '';
    for (let colums = 1; colums<=rows; colums++) {
        current++;
        print+=current + ' ';
        if (current == target) {
            isBigger = true;
            break;
        }
    }
    console.log(print);
    if (isBigger) {
        break;
    }
}

}
pyramid(["12"])