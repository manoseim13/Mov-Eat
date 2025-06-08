const movies = [
  {
    title: "The Hollow Mark",
    description: "A small-town coroner uncovers a pattern of ritualistic deaths linked to a forgotten cult buried in local history.",
    genre: "Horror",
    year: "2021",
    duration: "1h 47min",
    director: "Lena Crowe",
    poster: "hollowmark-poster.jpg",
    background: "../horror2.jpg",
    rating: "★ ★ ★ ★ ☆",
    score: "4.4/5 (1.1k reviews)",
  },
  {
    title: "Echoes Beneath",
    description: "After moving into an old coastal manor, a couple begins to hear whispers from the floorboards—whispers that reveal the manor’s bloody past.",
    genre: "Horror",
    year: "2022",
    duration: "1h 39min",
    director: "Malik Henders",
    poster: "echoesbeneath-poster.jpg",
    background: "../horror1.jpg",
    rating: "★ ★ ★ ☆ ☆",
    score: "3.9/5 (860 reviews)",
  },
  {
    title: "Crimson Verge",
    description: "On the edge of a dying town, a filmmaker documents a legend about a ghost train that arrives each blood moon—and takes passengers who never return.",
    genre: "Horror",
    year: "2023",
    duration: "1h 52min",
    director: "Juno Wren",
    poster: "crimsonverge-poster.jpg",
    background: "../horror5.jpg",
    rating: "★ ★ ★ ★ ☆",
    score: "4.3/5 (1.4k reviews)",
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
