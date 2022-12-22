const player = document.getElementById("player");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const songTitle = document.getElementById("song-title");

// Get the current source element
const currentSource = player.querySelector(
  `source[src="${player.currentSrc}"]`
);

// Get the current song index
const currentSongIndex = Array.from(player.children).indexOf(currentSource);

// Update the song title
songTitle.textContent = "Current song: " + currentSource.src;

player.addEventListener("ended", function () {
  // Go to the next song in the playlist when the current song ends
  const nextSong = player.children[currentSongIndex + 1];
  if (nextSong) {
    player.src = nextSong.src;
    player.play(); // start playing the next song
  }
});

prevButton.addEventListener("click", () => {
  const currentTime = player.currentTime;
  if (currentTime > 5) {
    player.currentTime = 0;
  } else {
    const previousSong = player.children[currentSongIndex - 1];
    if (previousSong) {
      player.src = previousSong.src;
      player.play();
    }
  }
});

nextButton.addEventListener("click", () => {
  const nextSong = player.children[currentSongIndex + 1];
  if (nextSong) {
    player.src = nextSong.src;
    player.play();
  }
});
