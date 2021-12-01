"use strict";
// import css for compression
require("../styles/styles.css");

const date = document.querySelector(".copyrightYear");
const topBTN = document.querySelector("#myBtn");
const navLogo = document.querySelector(".nav-logo");
const navbar = document.getElementById("nav");
// ==== section combination ====
// contact me section
const contactBtn = document.querySelector("#hireMe");
const contactSection = document.querySelector("#contact");
// about me section
const aboutMeBTN = document.querySelector(".aboutMeBTN");
const aboutMeSection = document.querySelector("#about");
// skills section
const skillsBTN = document.querySelector("#mySkills");
const skillsContainer = document.querySelector("#skills");
// video contact section
const btnInVideo = document.querySelector("#inVideoBTN_Contact");
const contactSectionFromVideoSection = document.querySelector(".contact");

module.export = { topBTN, navLogo };

// =======vanilla JS ==========

// ========= AOS animation ==========
AOS.init();
// ========= coppyright year ==========handler
(function () {
  const current_year =  new Date().getFullYear();
  date.textContent =  current_year;
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

// hide show navbar on scroll
// (function () {
//   let doc = document.documentElement,
//     w = window,
//     prevScroll = w.scrollY || doc.scrollTop,
//     curScroll,
//     direction = 0,
//     prevDirection = 0,
//     header = navbar,
//     checkScroll = function () {
//       curScroll = w.scrollY || doc.scrollTop;
//       if (curScroll > prevScroll) {
//         //scrolled up
//         direction = 2;
//       } else if (curScroll < prevScroll) {
//         //scrolled down
//         direction = 1;
//       }

//       if (direction !== prevDirection) {
//         toggleHeader(direction, curScroll);
//       }

//       prevScroll = curScroll;
//     };

//   let toggleHeader = function (direction, curScroll) {
//     if (direction === 2 && curScroll > 52) {
//       //replace 52 with the height of your header in px

//       header.style.cssText = "top: -50%; transition: .5s;";
//       prevDirection = direction;
//     } else if (direction === 1) {
//       header.style.cssText = "top: 0%; transition: .5s;";
//       prevDirection = direction;
//     }
//   };

//   window.addEventListener("scroll", checkScroll);
// })();

// smooth scrolling to contact section
handleInnerScroll(contactBtn, contactSection);
// smooth scrolling about me
handleInnerScroll(aboutMeBTN, aboutMeSection);
// smooth scrolling skills section
handleInnerScroll(skillsBTN, skillsContainer);
// smooth scrolling to contact section from video section
handleInnerScroll(btnInVideo, contactSectionFromVideoSection);
