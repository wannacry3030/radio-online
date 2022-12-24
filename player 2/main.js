const tracks = ["song1.mp3", "song2.mp3", "song3.mp3"];

let currentTrack = 0;

function playNext() {
  currentTrack = (currentTrack + 1) % tracks.length;
  player.src = tracks[currentTrack];
  player.play();
}

function playPrevious() {
  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  player.src = tracks[currentTrack];
  player.play();
}
