function trainingLab(input){

    let w = input[0]*100;
    let h = input[1]*100;
    let cleanH = h - 100; 
    let wFor1Place = 120; 
    let hFor1Place = 70; 
    
    let workingSpaces = Math.floor(w/wFor1Place) * Math.floor(cleanH/hFor1Place) - 3; 

    console.log(workingSpaces);

}

trainingLab([8.4, 5.2]);
