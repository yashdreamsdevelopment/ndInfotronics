// script for side navigation
let hamburger = document.getElementById("hamburger");
let sideNav = document.getElementById("sideNav");
let closeBtn = document.getElementById("closeBtn");

hamburger.addEventListener("click", () => {
  sideNav.classList.toggle("openIt");
});

sideNav.addEventListener("focusout", () => {
  sideNav.classList.remove("openIt");
});

closeBtn.addEventListener("click", () => {
  sideNav.classList.toggle("openIt");
});
