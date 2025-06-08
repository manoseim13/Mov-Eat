const movies = [
  {
    title: "Fading Echoes",
    description: "A former musician struggles to reconnect with his estranged daughter after a life-changing diagnosis.",
    genre: "Drama",
    year: "2019",
    duration: "2h 01min",
    director: "Lena Hart",
    poster: "inception-poster.jpg",
    background: "../drama1.jpg",
    rating: "★ ★ ★ ★ ☆",
    score: "4.5/5 (1.1k reviews)",
  },
  {
    title: "Winter Between Us",
    description: "Two siblings reunite in their snowy hometown to care for their aging father, uncovering long-buried secrets.",
    genre: "Drama",
    year: "2022",
    duration: "2h 03min",
    director: "Nora Kim",
    poster: "darkknight-poster.jpg",
    background: "../drama2.jpg",
    rating: "★ ★ ★ ★ ★",
    score: "5/5 (650 reviews)",
  },
  {
    title: "Letters Not Sent",
    description: "A woman discovers a box of unsent letters from her late husband, triggering a journey through grief, memory, and healing.",
    genre: "Drama",
    year: "2021",
    duration: "1h 50min",
    director: "Caleb Moreno",
    poster: "interstellar-poster.jpg",
    background: "../drama3.jpg",
    rating: "★ ★ ★ ★ ☆",
    score: "4.7/5 (1.3k reviews)",
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
