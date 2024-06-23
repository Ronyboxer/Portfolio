// const images = document.querySelectorAll("img");
// images.forEach(function (image) {
//   image.addEventListener("click", test);
// });

document.addEventListener("keydown", function (event) {
  //stop previously playing sound
  document.querySelector(".drums audio").pause();
  document.querySelector(".guitar audio").pause();
  document.querySelector(".piano audio").pause();
  document.querySelector(".trumpet audio").pause();
  document.querySelector(".violin audio").pause();
  document.querySelector(".flute audio").pause();
  if (event.key == "d") {
    document.querySelector(".drums audio").play();
  }
  if (event.key == "g") {
    document.querySelector(".guitar audio").play();
  }
  if (event.key == "p") {
    document.querySelector(".piano audio").play();
  }
  if (event.key == "t") {
    document.querySelector(".trumpet audio").play();
  }
  if (event.key == "v") {
    document.querySelector(".violin audio").play();
  }
  if (event.key == "f") {
    document.querySelector(".flute audio").play();
  }
});
function toggleTable() {
  document.querySelector(".table-container").classList.toggle("hide");
}
