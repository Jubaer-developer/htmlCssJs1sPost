"use strict";
/* dark theme code start */
let themeIcon = document.getElementsByClassName("icon");

if (localStorage.getItem("value")) {
  document.body.classList.toggle(localStorage.getItem("value"));
  themeIcon[0].src = localStorage.getItem("icon");
}
themeIcon[0].onclick = () => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    themeIcon[0].src = "../img/sun.png";
  } else {
    themeIcon[0].src = "../img/moon.png";
    localStorage.removeItem("value");
    localStorage.removeItem("icon");
  }
  localStorage.setItem("value", document.body.classList.value);
  localStorage.setItem("icon", themeIcon[0].src);
  console.log(document.body.classList.value);
};

/* dark theme code end */
