const movies = [
{
  title: "Shatterpoint",
  description: "A brilliant hacker is framed for a global blackout. With time running out, she must uncover the truth and outsmart a shadow organization.",
  genre: "Thriller",
  year: "2024",
  duration: "1h 54min",
  director: "Nico Alvarez",
  poster: "shatterpoint-poster.jpg",
  background: "../mylist1.jpg",
  rating: "★ ★ ★ ★ ★",
  score: "4.8/5 (3.4k reviews)",
},
{
  title: "Kingdom of Dust",
  description: "Set in a post-apocalyptic desert world, a rogue prince rises against tyrants in a brutal battle for survival and justice.",
  genre: "Fantasy",
  year: "2021–",
  duration: "Season 2: 9 episodes, avg 48min each",
  director: "Elena Varga",
  poster: "kingdomofdust-poster.jpg",
  background: "../mylist2.jpg",
  rating: "★ ★ ★ ★ ★",
  score: "4.7/5 (3.1k reviews)",
}

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
