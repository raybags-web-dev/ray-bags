"use strict";
// import css for compression
require("../styles/styles.css");
require("../images/businessCard.png");
require("../images/face_1_min.jpeg");
require("../images/face_2_min.jpeg");
require("../images/face_3_min.jpeg");
require("../images/face_4_min.jpg");
require("../images/face_5_min.jpg");
require("../images/face_6_min.jpg");
require("../images/meeee.jpg");
require("../images/need_4_speed.png");
require("../images/new_logoo2.png");
require("../images/project_2.jpg");
require("../images/project_3.jpg");

const date = document.querySelector(".copyrightYear");
const topBTN = document.querySelector("#myBtn");
const navLogo = document.querySelector(".nav-logo");
const serviceCard = document.querySelectorAll(".service");
const allProjects = document.querySelectorAll(".project");
const blogCards = document.querySelectorAll(".blog-card");
const timelineItems = document.querySelectorAll(".timeline-item");
const aboutInfo = document.querySelector(".about-info");
// ==== section combination ====
// contact me section
const contactBtn = document.querySelector("#hireMe");
const contactSection = document.querySelector(".login-section");
const loginForm = document.querySelector(".login-wrapper");
// about me section
const aboutMeBTN = document.querySelector(".aboutMeBTN");
const aboutMeSection = document.querySelector("#about");
const aboutImage = document.querySelector(".about-img");
// skills section
const skillsBTN = document.querySelector("#mySkills");
const all_skills = document.querySelectorAll(".skill-container");
const skillsContainer = document.querySelector("#skills");
const skills = document.querySelectorAll(".skill");
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
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.5,
    rootMargin: "-1px",
  }
);
// fadein observer
const observer_projects = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("fadeIn-effect", entry.isIntersecting);
      // if elemnet is on screen, stop observing it
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.5,
    rootMargin: "-1px",
  }
);

// Observer skills container
const observer_skills = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("skills_show", entry.isIntersecting);
      // if elemnet is on screen, stop observing it
      // if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.5,
    rootMargin: "-1px",
  }
);

// slideup-observer
const observer_rotateItem = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("slide-left-effect", entry.isIntersecting);
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
serviceCard.forEach((card) => {
  observer_rotateItem.observe(card);
});
// animate service cards
allProjects.forEach((card) => {
  observer_projects.observe(card);
});

// animate login section cards
observer_projects.observe(loginForm);

// animate skill cards
skills.forEach((card) => {
  observer.observe(card);
});

// animate testimonial cards
blogCards.forEach((card) => {
  observer_rotateItem.observe(card);
});

// animate testimonial cards
timelineItems.forEach((card) => {
  observer_rotateItem.observe(card);
});

// animate skills when in viewport
all_skills.forEach((card) => {
  observer_skills.observe(card);
});
// animate about info card 
observer_rotateItem.observe(aboutInfo);
// animate about image 
observer_rotateItem.observe(aboutImage);

// smooth scrolling to contact section
handleInnerScroll(contactBtn, contactSection);
// smooth scrolling about me
handleInnerScroll(aboutMeBTN, aboutMeSection);
// smooth scrolling skills section
handleInnerScroll(skillsBTN, skillsContainer);
// smooth scrolling to contact section from video section
handleInnerScroll(contactSectionFromVideoSection);
