"use strict";
// import css
require("../styles/modular.css");
require("../styles/styles.css");
require("../styles/livechat.css");
// import images
require("../images/businessCard.png");
require("../images/meeee.jpg");
require("../images/need_4_speed.png");
require("../images/new_logoo2.png");
require("../images/project_2.jpg");
require("../images/project_3.jpg");
// temperature anchers
const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
const currentWeatherItemsEl = document.getElementById("current-weather-items");
const timezone = document.getElementById("time-zone");

const navIcons = Array.from(document.querySelectorAll(".logo__1"));
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
const API_KEY = "4ccb6af86e070324f47859ab51e50bb9";

module.export = { topBTN, navLogo };

// ========= coppyright year ==========handler
(function() {
    const current_year = new Date().getFullYear();
    date.textContent = current_year;
})();

// temperature functionality
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];
// api key not a secret. Feel free to use it.
// const API_KEY = "4ccb6af86e070324f47859ab51e50bb9";

// set interval to call and set date and time resources
setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
    const minutes = time.getMinutes();
    const ampm = hour >= 12 ? "PM" : "AM";

    timeEl.innerHTML =
        (hoursIn12HrFormat < 10 ? "0" + hoursIn12HrFormat : hoursIn12HrFormat) +
        ":" +
        (minutes < 10 ? "0" + minutes : minutes) +
        " " +
        `<span id="am-pm">${ampm}</span>`;

    dateEl.innerHTML = days[day] + ", " + date + " " + months[month];
}, 1000);

// get weather handler.
getWeatherData();

// get weather handler logic
function getWeatherData() {
    navigator.geolocation.getCurrentPosition((success) => {
        let { latitude, longitude } = success.coords;

        fetch(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
            )
            .then((res) => res.json())
            .then((data) => {
                showWeatherData(data);
            })
            .catch((error) => alert(error.message));
    });
}

// weather data handler
function showWeatherData(data) {
    if (data.current == undefined) return;
    let { humidity, pressure, sunrise, sunset, wind_speed, temp, feels_like } =
    data.current, { description } = data.current.weather[0];

    timezone.innerHTML = data.timezone;

    currentWeatherItemsEl.innerHTML = `<div class="weather-item">
        <div>Humidity</div>
        <div>${humidity}%</div>
    </div>
    <div class="weather-item">
        <div>Pressure</div>
        <div>${pressure}</div>
    </div>
    <div class="weather-item">
      <div>Temperature</div>
      <div>${temp}&deg;</div>
    </div>
    <div class="weather-item">
      <div>feels like</div>
      <div>${feels_like}&deg;</div>
    </div>
    <div class="weather-item">
      <div>-- </div>
      <div>${description}</div>
    </div>
    <div class="weather-item">
        <div>Wind Speed</div>
        <div>${wind_speed}</div>
    </div>
    
    <div class="weather-item">
        <div>Sunrise</div>
        <div>${window.moment(sunrise * 1000).format("HH:mm a")}</div>
    </div>
    <div class="weather-item">
        <div>Sunset</div>
        <div>${window.moment(sunset * 1000).format("HH:mm a")}</div>
    </div> `;
}

// inner section smooth scroll
function handleInnerScroll(targetBTN, targetSection) {
    if (!targetBTN || !targetSection) return;
    targetBTN.addEventListener("click", function() {
        window.scroll({
            top: 2500,
            left: 0,
            behavior: "smooth",
        });
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
    }, {
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
    }, {
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
    }, {
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
            if (entry.isIntersecting) observer.unobserve(entry.target);
        });
    }, {
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
// smooth scrolling icon logos
navIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
        document.getElementById("home").scrollIntoView({
            behavior: "smooth",
        });
    });
});