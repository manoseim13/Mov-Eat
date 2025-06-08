const movies = [
  {
    title: "Ghostbusters",
    description: "A team of eccentric scientists turn to ghost-catching when paranormal activity strikes New York City…",
    genre: "Comedy, Supernatural",
    year: "1984",
    duration: "1h 45min",
    director: "Ivan Reitmann",
    poster: "inception-poster.jpg",
    background: "../ghost.jpg",
    rating: "★ ★ ★ ★ ☆",
    score: "4.4/5 (980 reviews)",
  },
  {
    title: "Last Days Laughs",
    description: "Two best friends try to make the most of their final days before big changes, leading to a series of funny and unforgettable moments.",
    genre: "Comedy",
    year: "2020",
    duration: "1h 45 min",
    director: "Jamie Lee",
    poster: "darkknight-poster.jpg",
    background: "../Last Days Laughs.jpg",
    rating: "★ ★ ★ ★ ☆",
    score: "4.2/5 (900 reviews)",
  },
  {
    title: "Weekend Shenanigans",
    description: "A quirky group of friends embarks on a chaotic weekend getaway full of hilarious mishaps and unexpected surprises.",
    genre: "Comedy",
    year: "2019",
    duration: "1h 50min",
    director: "Alex Morgan",
    poster: "interstellar-poster.jpg",
    background: "../Weekend Shenanigans.jpg",
    rating: "★ ★ ★ ★ ☆",
    score: "4.5/5 (1.1k reviews)",
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
