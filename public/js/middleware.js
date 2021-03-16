"use strict";
import {
  topButton,
  nav_container,
  menu_bugger_icon,
  close_menu_icon,
  logo_btn,
  cookie_accept_bunner,
  cookie_accept_bunner_icon,
} from "./main.js";

// logger message
const logger = (message) => console.log(`%c ${message}`, "color: green;");

// apply sctive class on menu link click
function applyActiveClassOnCLick() {
  $(".nav_list .nav_item a").on("click", function () {
    $(".nav_list .nav_item").find("a.stick").removeClass("stick");
    $(this).addClass("stick");
  });
}

// spinner show on load
$(window).on("load", () => {
  $(".banner").css({
    background: `linear-gradient(rgb(0,0,0,.5), rgb(0,0,0,.5)), url("") center/cover no-repeat fixed`,
  });
});
// top button visibility handler.
const show_hide_top_button = (element) => {
  element = topButton;
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
  topButton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
  logo_btn.addEventListener("click", () => {
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
// lady load images helper function.

const lazyLoadImages = (all_images) => {
  document.addEventListener("DOMContentLoaded", () => {
    let lazyloadImages = all_images,
      lazyloadThrottleTimeout;

    const lazyload = () => {
      if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(() => {
        lazyloadImages.forEach((img) => {
          if (element_isIn_viewPort(img)) {
            img.src = img.dataset.src;
            img.classList.remove("lazy");
          }
        });

        if (lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    };
    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  });
};

// Open menu handler
const openMenu = function (e) {
  e.preventDefault();

  close_menu_icon.classList.remove("hide");
  menu_bugger_icon.classList.add("hide");

  nav_container.style.left = "0";
  nav_container.style.transition = ".8s";
};

// close menu handler
const closeMenu = function () {
  menu_bugger_icon.classList.remove("hide");
  close_menu_icon.classList.add("hide");

  nav_container.style.left = "-100%";
  nav_container.style.transition = ".8s";
};
// remove menu by clicking any link handler.
const closeMenuWithLink = function () {
  menu_bugger_icon.classList.remove("hide");
  close_menu_icon.classList.add("hide");

  nav_container.style.left = "-100%";
  nav_container.style.transition = ".8s";
};

// coppyright year handler

const copyRightYear = function (element) {
  const current_year = new Date().getFullYear();
  element.textContent = current_year;
};

// cookie banner and cookie accepted banner handler.
function cookie_accepted() {
  window.addEventListener("cookieAlertAccept", function () {
    $(cookie_accept_bunner).addClass("slideInDown");
    $(cookie_accept_bunner).removeClass("hide");
    $(document).ready(function () {
      $(cookie_accept_bunner_icon).click(function () {
        $(cookie_accept_bunner).slideUp();
        $(cookie_accept_bunner).removeClass("slideInDown");
        setTimeout(() => $(cookie_accept_bunner).addClass("hide"), 1000);
      });
    });
  });
}
// close menu by clicking any link.
const closeMenuWithLinkClicks = (links) => {
  links.forEach((link) => {
    link.addEventListener("click", closeMenuWithLink, false);
  });
};

// Paralax effect

function parallax() {
  let scroll = $(window).scrollTop();
  let screenHeight = $(window).height();
  logger($(".parallax").length);

  $(".parallax").each(function () {
    console.log();
    let offset = $(this).offset().top;
    let distanceFromBottom = offset - scroll - screenHeight;

    if (offset > screenHeight && offset) {
      $(this).css(
        "background-position",
        "center " + distanceFromBottom * 0.5 + "px"
      );
    } else {
      $(this).css({
        "background-position": "center" + -scroll * 0.5 + "px",
        "object-filt": "cover",
      });
    }
  });
}

export {
  move_to_top_of_page,
  go_to_top,
  openMenu,
  closeMenu,
  closeMenuWithLink,
  copyRightYear,
  cookie_accepted,
  lazyLoadImages,
  closeMenuWithLinkClicks,
  applyActiveClassOnCLick,
  element_isIn_viewPort,
  parallax,
};
