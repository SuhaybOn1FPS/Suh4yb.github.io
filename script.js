const songs = [
  {
    title: "Torikago (From DARLING in the FRANXX)",
    artist: "Akano",
    cover: "./images/torikago.jpg", // local image
    url: "https://open.spotify.com/track/29iD2DMbbCXxMQmvDqM8xK",
  },
  {
    title: "Under Your Spell",
    artist: "Snow Strippers",
    cover: "./images/under-your-spell.jpg",
    url: "https://open.spotify.com/track/2mj2HiJ3kJQ4mdCik25ea1",
  },
  {
    title: "Screwface Capital",
    artist: "Dave",
    cover: "./images/screwface-capital.jpg",
    url: "https://open.spotify.com/track/65TggCitjPK0sUXtwgOkN9",
  },
  {
    title: "Swimming Pools (Drank)",
    artist: "Kendrick Lamar",
    cover: "./images/swimming-pools.jpg",
    url: "https://open.spotify.com/track/6REbwUNlppTfcnV4d4ZoZi",
  },
];

let index = 0;
const INTERVAL = 5000; // autoplay every 5 seconds
let timer;

const cover = document.getElementById("cover");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const playBtn = document.getElementById("playBtn");
const dotsContainer = document.getElementById("dots");

// Render the current song
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

// Show previous song
function showPrev() {
  index = (index - 1 + songs.length) % songs.length;
  renderSong(index);
  resetTimer();
}

// Show next song
function showNext() {
  index = (index + 1) % songs.length;
  renderSong(index);
  resetTimer();
}

// Reset autoplay timer
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(showNext, INTERVAL);
}

// Create dots for navigation
songs.forEach((_, i) => {
  const btn = document.createElement("button");
  btn.addEventListener("click", () => {
    index = i;
    renderSong(index);
    resetTimer();
  });
  dotsContainer.appendChild(btn);
});

// Initialize carousel
renderSong(index);
timer = setInterval(showNext, INTERVAL);

// Attach arrow event listeners
document.getElementById("prevBtn").addEventListener("click", showPrev);
document.getElementById("nextBtn").addEventListener("click", showNext);

