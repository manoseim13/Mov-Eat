
  const movies = [
 {
    title: "Thornvale: Rise of the Hollow King",
    description: "In a realm where magic is dying, a rebellious heir must unite rival kingdoms to stop an ancient evil buried beneath the forest of Thornvale.",
    genre: "Fantasy Series",
    year: "2021–Present",
    duration: "3 Seasons, Avg. 50min/ep",
    director: "Elara Vynn",
    poster: "thornvale-poster.jpg",
    background: "../fantasy1.jpg",
    rating: "★ ★ ★ ★ ☆",
    score: "4.6/5 (1.7k reviews)",
  },
  {
    title: "Moonfire Pact",
    description: "A forbidden bond between a human thief and a moon-born warrior threatens to upend the balance between two warring dimensions.",
    genre: "Fantasy Series",
    year: "2022–Present",
    duration: "2 Seasons, Avg. 48min/ep",
    director: "Kairo Niven",
    poster: "moonfire-pact-poster.jpg",
    background: "../fantasy2.jpg",
    rating: "★ ★ ★ ★ ☆",
    score: "4.3/5 (1.2k reviews)",
  },
  {
    title: "Glassborn",
    description: "A gifted girl born in a world of glass and reflections must harness her fractured reality to save her people from a shattering fate.",
    genre: "Fantasy Series",
    year: "2020–2023",
    duration: "4 Seasons, Avg. 55min/ep",
    director: "Rina Ayers",
    poster: "glassborn-poster.jpg",
    background: "../fantasy4.jpg",
    rating: "★ ★ ★ ★ ★",
    score: "4.8/5 (2k reviews)",
  },
  {
    title: "Ashes of Eloria",
    description: "When the last fire-wielder escapes a doomed fortress, ancient myths ignite a rebellion against the eternal frost.",
    genre: "Fantasy Series",
    year: "2023–Present",
    duration: "1 Season, Avg. 52min/ep",
    director: "Talen Moreau",
    poster: "eloria-poster.jpg",
    background: "../fantasy3.jpg",
    rating: "★ ★ ★ ★ ☆",
    score: "4.5/5 (950 reviews)",
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
