function building (input) {

    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for (let f = floors; f>=1   ;f--) {
        let print = '';
        for (let r = 0; r<rooms; r++) {
            if (f == floors) {
                print+=`L${f}${r} `;
            } else if (f%2==0) {
                print+=`O${f}${r} `;
            } else if (f%2==1) {
                print+=`A${f}${r} `;
            } 

        }
        console.log(print);
    }

}
building(["4", "4"])