const movies = [
 {
    title: "Echoes in the Fog",
    description: "A coastal town hides dark secrets as a young journalist uncovers a string of cold cases that might be connected to her own past.",
    genre: "Thriller",
    year: "2022–Present",
    duration: "Season 2: 9 episodes, avg 50min each",
    director: "Lena Cross",
    poster: "echoesfog-poster.jpg",
    background: "../thriller3.jpg",
    rating: "★ ★ ★ ★ ☆",
    score: "4.3/5 (1.1k reviews)",
  },
  {
    title: "Shadow Line",
    description: "A former undercover agent is forced back into the world of espionage after a mysterious message resurfaces from a long-buried mission.",
    genre: "Thriller",
    year: "2021–Present",
    duration: "Season 3: 10 episodes, avg 47min each",
    director: "Marcus Hale",
    poster: "shadowline-poster.jpg",
    background: "../thriller2.jpg",
    rating: "★ ★ ★ ★ ☆",
    score: "4.5/5 (1.4k reviews)",
  },
  {
    title: "The Whisper Vault",
    description: "An experimental therapy clinic begins to lose patients under strange circumstances until one survivor uncovers what’s really being ‘treated.’",
    genre: "Thriller",
    year: "2023–Present",
    duration: "Season 1: 6 episodes, avg 52min each",
    director: "Ivy Lang",
    poster: "whispervault-poster.jpg",
    background: "../thriller1.jpg",
    rating: "★ ★ ★ ★ ☆",
    score: "4.2/5 (990 reviews)",
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
