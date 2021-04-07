"use strict";
import { topBTN } from "./app.js";

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

export { copyRightYear, go_to_top };
