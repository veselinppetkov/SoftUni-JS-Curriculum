function gramophone(band, album, song) {
  let duration = (album.length * band.length * song.length) / 2;
  let rotation = 0;

  while (duration > 0) {
    rotation++;
    duration -= 2.5;
  }
  console.log(rotation);
}
gramophone("Black Sabbath", "Paranoid", "War Pigs");
