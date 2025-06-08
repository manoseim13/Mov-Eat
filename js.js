const movies = [
  {
    title: "Inception",
    description: "A skilled thief is given a chance at redemption...",
    genre: "Sci-Fi",
    year: "2010",
    duration: "2h 28min",
    director: "Christopher Nolan",
    poster: "inception-poster.jpg",
    background: "poster.jpg",
    rating: "★ ★ ★ ★ ☆",
    score: "4.5/5 (1.2k reviews)",
  },
  {
    title: "The Dark Knight",
    description: "Batman faces the Joker in a gripping fight for Gotham.",
    genre: "Action",
    year: "2008",
    duration: "2h 32min",
    director: "Christopher Nolan",
    poster: "darkknight-poster.jpg",
    background: "batman.jpg",
    rating: "★ ★ ★ ★ ★",
    score: "5/5 (2k reviews)",
  },
  {
    title: "Interstellar",
    description: "A team travels through a wormhole in search of a new home for humanity.",
    genre: "Adventure",
    year: "2014",
    duration: "2h 49min",
    director: "Christopher Nolan",
    poster: "interstellar-poster.jpg",
    background: "interstellar.jpg",
    rating: "★ ★ ★ ★ ☆",
    score: "4.7/5 (1.8k reviews)",
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
