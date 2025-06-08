const movies = [
 {
    title: "Echoes of Orion",
    description: "In the distant future, a lone explorer uncovers an ancient signal that leads to a secret capable of saving — or destroying — humanity.",
    genre: "Sci-Fi",
    year: "2023",
    duration: "2h 17min",
    director: "Layla Chen",
    poster: "echoesorion-poster.jpg",
    background: "../toprated1.jpg",
    rating: "★ ★ ★ ★ ★",
    score: "4.9/5 (3.2k reviews)",
  },
  {
    title: "The Fourth Wall",
    description: "A renowned actor disappears during filming. As the investigation unfolds, reality and fiction begin to blur in this psychological thriller.",
    genre: "Thriller",
    year: "2022–",
    duration: "Season 2: 7 episodes, avg 52min each",
    director: "Milo Hart",
    poster: "fourthwall-poster.jpg",
    background: "../toprated2.jpg",
    rating: "★ ★ ★ ★ ★",
    score: "4.8/5 (2.7k reviews)",
  },
  {
    title: "Beneath the Ashes",
    description: "After a volcano eruption reveals long-buried ruins, a team of scientists races against time to decode a message that could alter human history.",
    genre: "Adventure",
    year: "2021",
    duration: "1h 58min",
    director: "Sofia Marquez",
    poster: "beneaththeashes-poster.jpg",
    background: "../toprated3.jpg",
    rating: "★ ★ ★ ★ ★",
    score: "4.7/5 (2.1k reviews)",
  },
  {
    title: "Nocturne City",
    description: "A gritty neo-noir detective series following an ex-cop drawn back into the shadows when a copycat killer mirrors a case from his past.",
    genre: "Crime",
    year: "2020–",
    duration: "Season 3: 10 episodes, avg 50min each",
    director: "Julian Redd",
    poster: "nocturnecity-poster.jpg",
    background: "../toprated4.jpg",
    rating: "★ ★ ★ ★ ★",
    score: "4.8/5 (3.9k reviews)",
  },
  {
    title: "Lightfall",
    description: "When the sun begins to fade decades earlier than expected, humanity’s last hope lies with a crew sent to reignite it from within.",
    genre: "Drama",
    year: "2024",
    duration: "2h 10min",
    director: "Aria Patel",
    poster: "lightfall-poster.jpg",
    background: "../toprated5.jpg",
    rating: "★ ★ ★ ★ ★",
    score: "4.9/5 (4.5k reviews)",
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
