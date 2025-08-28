const songs = [
  {
    title: "Torikago (From DARLING in the FRANXX)",
    artist: "Akano",
    cover: "https://i.scdn.co/image/ab67616d0000b2736f010fe0a4953ea05559cc49",
    url: "https://open.spotify.com/track/29iD2DMbbCXxMQmvDqM8xK",
  },
  {
    title: "Under Your Spell",
    artist: "Snow Strippers",
    cover: "https://i.scdn.co/image/ab67616d0000b273bcf09e9cfe1648351bc70a02",
    url: "https://open.spotify.com/track/2mj2HiJ3kJQ4mdCik25ea1",
  },
  {
    title: "Screwface Capital",
    artist: "Dave",
    cover: "https://i.scdn.co/image/ab67616d0000b27333d6a5f2f14f0b0ecbca5c8b",
    url: "https://open.spotify.com/track/65TggCitjPK0sUXtwgOkN9",
  },
  {
    title: "Swimming Pools (Drank)",
    artist: "Kendrick Lamar",
    cover: "https://i.scdn.co/image/ab67616d0000b2730c43b1aa3a2ef9f05a402a84",
    url: "https://open.spotify.com/track/6REbwUNlppTfcnV4d4ZoZi",
  },
];

let index = 0;
const INTERVAL = 5000; // 5 seconds autoplay
let timer;

const cover = document.getElementById("cover");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const playBtn = document.getElementById("playBtn");
const dotsContainer = document.getElementById("dots");

function renderSong(i) {
  const song = songs[i];
  cover.src = song.cover;
  title.textContent = song.title;
  artist.textContent = song.artist;
  playBtn.href = song.url;

  document.querySelectorAll(".carousel-dots button").forEach((dot, idx) => {
    dot.classList.toggle("active", idx === i);
  });
}

function showPrev() {
  index = (index - 1 + songs.length) % songs.length;
  renderSong(index);
  resetTimer();
}

function showNext() {
  index = (index + 1) % songs.length;
  renderSong(index);
  resetTimer();
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(showNext, INTERVAL);
}

// Create dots
songs.forEach((_, i) => {
  const btn = document.createElement("button");
  btn.addEventListener("click", () => {
    index = i;
    renderSong(index);
    resetTimer();
  });
  dotsContainer.appendChild(btn);
});

// Initialize
renderSong(index);
timer = setInterval(showNext, INTERVAL);

document.getElementById("prevBtn").addEventListener("click", showPrev);
document.getElementById("nextBtn").addEventListener("click", showNext);

