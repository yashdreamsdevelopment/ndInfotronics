// theme switch
let themeBtn = document.querySelector(".themeSwitch");
console.log(themeBtn);
let body = window.document.body;
themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  themeBtn.classList.toggle("themeIcon");
});

// theme switch for small devices
let themeBtnSmallDevices = document.querySelector(".themeSwitchSmallDevices");
themeBtnSmallDevices.addEventListener("click", () => {
  body.classList.toggle("dark");
  themeBtnSmallDevices.classList.toggle("themeIconSmallDevices");
});
