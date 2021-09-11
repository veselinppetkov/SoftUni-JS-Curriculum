function comb (input) {

    let num = Number(input[0]);
    let combinations = 0;

    for (let a = 0; a<=num; a++) {
        for (let b = 0; b<=num; b++) {
            for (c = 0; c<=num; c++) {
                if (a+b+c==num) {
                    combinations++
                }
            }
        }
    }
    console.log(combinations);

}
comb(["25"]);