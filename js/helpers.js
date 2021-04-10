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

function handleInnerScroll(targetBTN, targetSection) {
  if (!targetBTN || !targetSection) return;
  // scroll to contact section
  targetBTN.addEventListener("click", function () {
    window.scroll({
      top: 2500,
      left: 0,
      behavior: "smooth",
    });

    // Scroll certain amounts from current position
    window.scrollBy({
      top: 100, // could be negative value
      left: 0,
      behavior: "smooth",
    });

    // Scroll to a certain element
    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  });
}

// Open nav bar handler
function openNavBar(openNavBTN, nav) {
  openNavBTN.addEventListener("click", function () {
    nav.classList.add("show-sidebar");
  });
}
// Open nav bar handler
function closeNavBar(closeNavBTN, nav) {
  closeNavBTN.addEventListener("click", function () {
    nav.classList.remove("show-sidebar");
  });
}

export { copyRightYear, go_to_top, handleInnerScroll, openNavBar, closeNavBar };
