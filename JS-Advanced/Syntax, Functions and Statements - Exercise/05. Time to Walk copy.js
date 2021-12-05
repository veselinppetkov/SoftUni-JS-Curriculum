function timeToWalk(steps, footprint, speedInKmH) {
  let distance = steps * footprint;
  let speed = speedInKmH * 1000;
  let breaks = Math.floor(distance / 500);

  let timeInHours = distance / speed;

  let hours = String(Math.trunc(timeInHours)).padStart(2, 0);
  let minutes = String(Math.trunc(timeInHours * 60) + breaks).padStart(2, 0);
  let seconds = String(Math.round(timeInHours * 3600) % 60).padStart(2, 0);

  return `${hours}:${minutes}:${seconds}`;
}
console.log(timeToWalk(4000, 0.6, 5));
console.log(timeToWalk(2564, 0.7, 5.5));
