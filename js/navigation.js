/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let navbar = document.getElementById("navbar");
let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0px";
  } else {
    navbar.style.top = "-80px";
  }

  prevScrollPos = currentScrollPos;
};
