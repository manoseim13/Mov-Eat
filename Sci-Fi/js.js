const movies = [
  {
    title: "Neon Divide",
    description: "In a sprawling megacity divided by wealth and tech implants, a rogue AI threatens to collapse the fragile balance between rich and poor.",
    genre: "Sci-Fi",
    year: "2023–Present",
    duration: "Season 1: 8 episodes, avg 50min each",
    director: "Kira Shaw",
    poster: "neondivide-poster.jpg",
    background: "../scifi1.jpg",
    rating: "★ ★ ★ ★ ☆",
    score: "4.6/5 (1.6k reviews)",
  },
  {
    title: "The Fracture Protocol",
    description: "After an experimental wormhole malfunctions, elite rescue units are sent across fractured realities to recover stranded scientists.",
    genre: "Sci-Fi",
    year: "2022–Present",
    duration: "Season 2: 10 episodes, avg 48min each",
    director: "Elias Venn",
    poster: "fractureprotocol-poster.jpg",
    background: "../scifi2.jpg",
    rating: "★ ★ ★ ★ ☆",
    score: "4.4/5 (1.3k reviews)",
  },
  {
    title: "Orbiters",
    description: "A group of engineers aboard a decaying orbital station must decide whether to return to Earth—or abandon humanity's last link to space.",
    genre: "Sci-Fi",
    year: "2021–Present",
    duration: "Season 3: 12 episodes, avg 45min each",
    director: "Noa Vicks",
    poster: "orbiters-poster.jpg",
    background: "../scifi3.jpg",
    rating: "★ ★ ★ ☆ ☆",
    score: "4.0/5 (980 reviews)",
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
