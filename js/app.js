import { AllJqueryLogin } from "./jQuery.js";
import {
  aosAnimation,
  copyRightYear,
  go_to_top,
  move_to_top_of_page,
} from "./helpers.js";

const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector(".copyrightYear");
const topBTN = document.querySelector("#myBtn");
const navLogo = document.querySelector(".nav-logo");

export { topBTN, navLogo };

// All Jquery
AllJqueryLogin();
// AOS animation
aosAnimation();
// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});

// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// set year
copyRightYear(date);
// show hide top btn
go_to_top();
move_to_top_of_page();
