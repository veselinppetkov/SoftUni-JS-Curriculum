function housePainting (input) {

let x = Number(input[0]); // Височина на къщата
let y = Number(input[1]); // Дължина на страничната стена
let h = Number(input[2]); // Височина на триъгълната страна на покрива
 
let lateralWall = x*y;
let window = 1.5*1.5;
let sides = 2*lateralWall - 2*window;
let backWall = x*x;
let backWallEntrance = 1.2*2;
let backAndFront = 2*backWall - backWallEntrance;

let totalSpace = sides + backAndFront;
let greenPaint = totalSpace/3.4;

let roofRectanagles = 2* (lateralWall);
let roofTriangles = 2* (x*h/2) 
let redPaint = (roofTriangles+roofRectanagles)/4.3;

console.log(greenPaint.toFixed(2));
console.log(redPaint.toFixed(2));

}

housePainting(["6","10","5.2"]);