function songs(arr) {
  let n = arr.shift();
  let type = arr.pop();
  let songs = [];

  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  for (let i = 0; i < n; i++) {
    let [typeList, name, time] = arr[i].split("_");
    let song = new Song(typeList, name, time);
    songs.push(song);
  }

  if (type === "all") {
    songs.forEach((x) => console.log(x.name));
  } else {
    let filtered = songs.filter((x) => x.typeList === type);
    filtered.forEach((x) => console.log(x.name));
  }
}

songs([
  4,
  "favourite_DownTown_3:14",
  "listenLater_Andalouse_3:24",
  "favourite_In To The Night_3:58",
  "favourite_Live It Up_3:48",
  "listenLater",
]);
