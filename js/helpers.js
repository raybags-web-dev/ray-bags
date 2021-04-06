"use strict";
import { topBTN, navLogo } from "./app.js";

// Animation initialization
const aosAnimation = () => AOS.init();

// coppyright year handler
const copyRightYear = function (element) {
  const current_year = new Date().getFullYear();
  element.textContent = current_year;
};

// top button visibility handler.
const show_hide_top_button = (element) => {
  element = topBTN;
  let window_height = document.body.scrollTop;
  let screen_height = document.documentElement.scrollTop;
  if (window_height > 400 || screen_height > 400) {
    element.classList.add("fadeInRight");
    element.classList.remove("fadeOut");
    element.classList.remove("hide");
  } else {
    element.classList.remove("fadeInRight");
    element.classList.add("fadeOut");
    element.classList.add("hide");
  }
};

// back to top handler
function go_to_top() {
  document.body.addEventListener(
    "scroll",
    () => {
      show_hide_top_button();
    },
    true
  );

  window.addEventListener("scroll", () => {
    show_hide_top_button();
  });

  document.body.addEventListener(
    "load",
    () => {
      show_hide_top_button();
    },
    true
  );

  window.addEventListener("load", () => {
    show_hide_top_button();
  });
}

const move_to_top_of_page = () => {
  topBTN.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
  navLogo.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
};

// Detect element in viewPort helper function
function element_isIn_viewPort(element) {
  const element_position = element.getBoundingClientRect();
  return (
    element_position.top >= 0 &&
    element_position.left >= 0 &&
    element_position.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    element_position.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
}

export { copyRightYear, go_to_top, move_to_top_of_page, aosAnimation };
