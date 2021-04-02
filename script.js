var bg = document.querySelector(".bg");
var input = document.querySelector("input");
var form = document.querySelector("form");
var text = document.querySelector(".txt");
var image = document.querySelector(".img");

form.addEventListener("submit", search);

function search(event) {
  event.preventDefault();
  fetch(`http://www.omdbapi.com/?t=${input.value}&apikey=fcac0a28`)
    .then((res) => res.json())
    .then((data) => {
      const {
        Title,
        Year,
        Released,
        Rated,
        Actors,
        Plot,
        Poster,
        Genre,
      } = data;
      text.innerHTML =
        Title +
        " : " +
        Year +
        "<hr>" +
        "" +
        Genre +
        "<hr>" +
        "" +
        Released +
        "<hr>" +
        "" +
        Rated +
        "<hr>" +
        "" +
        Actors +
        "<hr>" +
        "" +
        Plot +
        "<hr>";

      console.log(Title);
      image.src = Poster;
      bg.src = Poster;
    });
}
