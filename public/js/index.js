"use strict";
// import css for compression
require("../styles/styles.css");
require("../images/_x22.jpg");
require("../images/favicon_min.png");
require("../images/another3.jpg");
require("../images/businessCard.png");
require("../images/face_1_min.jpeg");
require("../images/face_2_min.jpeg");
require("../images/face_3_min.jpeg");
require("../images/face_4_min.jpeg");
require("../images/face_5_min.jpeg");
require("../images/face_6_min.jpeg");
require("../images/meeee.jpg");
require("../images/need_4_speed.png");
require("../images/new_logoo2.png");
require("../images/profile_me.jpeg");
require("../images/project_2.jpeg");
require("../images/project_3.jpeg");

const date = document.querySelector(".copyrightYear");
const topBTN = document.querySelector("#myBtn");
const navLogo = document.querySelector(".nav-logo");
const allCards = document.querySelectorAll(".service");
const allProjects = document.querySelectorAll(".project");
// ==== section combination ====
// contact me section
const contactBtn = document.querySelector("#hireMe");
const contactSection = document.querySelector(".login-section");
// about me section
const aboutMeBTN = document.querySelector(".aboutMeBTN");
const aboutMeSection = document.querySelector("#about");
// skills section
const skillsBTN = document.querySelector("#mySkills");
const skillsContainer = document.querySelector("#skills");
// video contact section
const contactSectionFromVideoSection = document.querySelector(".contact");

module.export = { topBTN, navLogo };

// ========= coppyright year ==========handler
(function () {
  const current_year = new Date().getFullYear();
  date.textContent = current_year;
})();

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
      top: 100,
      left: 0,
      behavior: "smooth",
    });
    // Scroll to a certain element
    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  });
}

// card animations.
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show_service_card", entry.isIntersecting);
      // if elemnet is on screen, stop observing it
      // if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.5,
    rootMargin: "-1px",
  }
);

// animate service cards
allCards.forEach((card) => {
  observer.observe(card);
});

// smooth scrolling to contact section
handleInnerScroll(contactBtn, contactSection);
// smooth scrolling about me
handleInnerScroll(aboutMeBTN, aboutMeSection);
// smooth scrolling skills section
handleInnerScroll(skillsBTN, skillsContainer);
// smooth scrolling to contact section from video section
handleInnerScroll(contactSectionFromVideoSection);
