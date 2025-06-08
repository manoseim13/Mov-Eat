const movies = [
 {
    title: "Iron District",
    description: "In a city split by corruption and power, a sharp-witted detective works the hardest precinct, taking on cases that threaten to unravel the truth behind the system itself.",
    genre: "Crime",
    year: "2020–Present",
    duration: "Season 4: 8 episodes, avg 55min each",
    director: "Dante Morris",
    poster: "irondistrict-poster.jpg",
    background: "../crime1.jpg",
    rating: "★ ★ ★ ★ ☆",
    score: "4.4/5 (1.6k reviews)",
  },
  {
    title: "Dead Ledger",
    description: "An accountant with a hidden past is pulled into a violent underground world when his old firm is linked to a series of deadly financial crimes.",
    genre: "Crime",
    year: "2021–Present",
    duration: "Season 2: 10 episodes, avg 50min each",
    director: "Viola Reyes",
    poster: "deadledger-poster.jpg",
    background: "../crime2.jpg",
    rating: "★ ★ ★ ★ ☆",
    score: "4.3/5 (1.2k reviews)",
  },
  {
    title: "Signal Trace",
    description: "A cybercrimes unit tracks a digital killer leaving encrypted clues with every victim. Each episode unlocks another part of a deeper conspiracy.",
    genre: "Crime",
    year: "2022–Present",
    duration: "Season 1: 6 episodes, avg 48min each",
    director: "Reed Tanaka",
    poster: "signaltrace-poster.jpg",
    background: "../crime3.jpg",
    rating: "★ ★ ★ ★ ★",
    score: "4.6/5 (1.8k reviews)",
  },
];

let current = 0;

function displayMovie(index) {
  const movie = movies[index];
  document.getElementById("movie-title").textContent = movie.title;
  document.getElementById("movie-description").textContent = movie.description;
  document.getElementById("movie-genre").textContent = movie.genre;
  document.getElementById("movie-year").textContent = movie.year;
  document.getElementById("movie-duration").textContent = movie.duration;
  document.getElementById("movie-director").textContent = movie.director;
  document.getElementById("movie-rating").textContent = movie.rating;
  document.getElementById("movie-score").textContent = movie.score;

  const heroSection = document.getElementById("movie-hero-section");
  heroSection.style.backgroundImage = `url('${movie.background}')`;
}

function nextMovie() {
  current = (current + 1) % movies.length;
  displayMovie(current);
}

function prevMovie() {
  current = (current - 1 + movies.length) % movies.length;
  displayMovie(current);
}

window.onload = () => {
  displayMovie(current);
  document.getElementById("next-btn").addEventListener("click", nextMovie);
  document.getElementById("prev-btn").addEventListener("click", prevMovie);
};
