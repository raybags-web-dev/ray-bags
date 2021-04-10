"use strict";

// coppyright year handler
const copyRightYear = function (element) {
  const current_year = new Date().getFullYear();
  element.textContent = current_year;
};

// inner section smooth scroll
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

export { copyRightYear, handleInnerScroll, openNavBar, closeNavBar };
