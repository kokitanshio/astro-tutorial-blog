const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("expanded");
});
