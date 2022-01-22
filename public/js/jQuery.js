"use strict";

// import { pageUnavailable } from "./mentainance.js";
import {
  mainCarocelContainer,
  sidebarsAppController,
  createSideApps,
  side_app_remove,
} from "./utils.js";
import { talent } from "./data.js";
import { themes_functionality } from "./themes.js";
import { contact_form_functionality } from "./contactForm.js";

// General jQuery handler.
document.addEventListener("DOMContentLoaded", function () {
  // const { sideConainer_is_visible } = sidebarsAppController();
  setTimeout(() => {
    // unhide back to top button on load
    $("#myBtn").removeClass("hide");
  }, 1000);
  // remove 'hide' class from images
  $(".hero-image-bg").removeClass("hide");

  // remove data-src attribute to show images after page loads
  $("img").each((index, image) => {
    $(image).attr("src", $(image).attr("data-src"));
    $(image).removeAttr("data-src");
  });

  // contact form functionality
  contact_form_functionality("#contact_me_form");
  // all carocel functionality
  mainCarocelContainer();
  // themes functionality
  themes_functionality();
  // create side app handler
  createSideApps(1500);
  // side app remove handler
  side_app_remove();

  // dynamic hero text handler
  setTimeout(() => {
    {
      let count = 0;
      setInterval(function () {
        $(".skill-desc span").animate({ width: "0%" });
        count++;
        $(".skill-desc").animate(300, function () {
          $(this)
            .text(talent[count % talent.length])
            .animate({
              margin: "0 auto",
            });
        });
      }, 3000);
    }
  }, 5000);

  // slide in top nav
  $(" .nav-links li").each((index, link) => {
    $(link)
      .delay(150 * index)
      .animate({ "margin-top": "0%" });
  });

  // Onload clear screen.
  $(".skeleton-wrapper").addClass("hide").animate({ opacity: 0 });

  // keep navbar fixied on scroll
  $("#nav").slideDown("1000", function () {
    $(this).addClass("navbar-fixed").css({
      top: "-1%",
      height: "2%",
    });
  });

  // open navbar close side navbar handlers
  (function () {
    // open  side menu
    $("#nav-btn").on("click", function () {
      $("#sidebar").addClass("show-sidebar");

      $(this).slideUp();
      $("#close-btn").fadeIn();
      $(".sidebar-links").animate({
        opacity: 1,
      });

      // animate side bar links
      $(".sidebar-links a").each(function (index, link) {
        $(link)
          .delay(30 * index)
          .animate({ left: 0 });
      });
    });
    // close  side menu
    $("#close-btn").on("click", function () {
      $("#sidebar").removeClass("show-sidebar");
      // animate side bar links
      $(".sidebar-links a").each(function (index, link) {
        $(link)
          .delay(30 * index)
          .animate({ left: "-100%" });
      });

      $("#nav-btn").slideDown().css({ opacity: 0.5 });
      $(this).fadeOut();
    });
  })();

  // flash skill button link handler
  $(".hyperMeLink").on("click", function (e) {
    e.preventDefault();
    $("#mySkills").addClass("flash-abtMe");
    setTimeout(() => {
      $("#mySkills").removeClass("flash-abtMe");
    }, 1000);
  });

  // handle side nav removal if individual nav links are clicked.
  const removeMenu = () => {
    $(".sidebar-links a").each(function () {
      $(this).on("click", function () {
        // Also slide down nav button
        $("#nav-btn").slideDown();
        $("#sidebar").removeClass("show-sidebar");
      });
    });
  };

  // scroll function and active class switcher for navbar
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 120) {
      $("#nav").css({
        background:
          "linear-gradient(45deg, rgb(0,0,0,.5), rgb(0, 0, 255, .5d), rgba(0, 238, 255, 0.3) 50%, rgb(119, 31, 31, .5))",
        "backdrop-filter": "blur(10px)",
        "box-shadow": "unset",
      });
    } else {
      $("#nav").css({
        background: "unset",
        "backdrop-filter": "unset",
        "box-shadow": "unset",
      });
    }
    // active class switcher on scroll (Scroll spy)
    let scrollBarLocation = $(this).scrollTop();
    let scrollLinks = $(".achor-link");

    scrollLinks.each(function () {
      let sectionOffset = $(this.hash).offset().top - 70;
      if (sectionOffset <= scrollBarLocation) {
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
      }
    });
  });

  // handle hero icon spead on load
  $(".hero-box-animate").each(function (index, icon) {
    $(icon)
      .delay(30 * index)
      .css({ "margin-right": "0rem" });
  });
  // handle Smooth scrolling helper
  const handlePageScroll = function () {
    let target = $(this).attr("href");
    $("body, html").animate({ scrollTop: $(target).offset().top }, 500);
    return false;
  };

  // smooth scrolling navigation on big screen
  $(".nav-links a").on("click", handlePageScroll);
  // smooth scrolling navigation on small screen
  $(".sidebar-links a").on("click", handlePageScroll);

  // smooth scrolling with back to top btn handler
  $("#myBtn").on("click", function () {
    let target = $("body, html");
    $("body, html").animate({ scrollTop: $(target).offset().top }, 500);
  });

  // smooth scrolling with logo image handler
  $(".logo__1").each((index, logo) => {
    $(logo).on("click", function () {
      let target = $("body, html");
      $("body, html").animate({ scrollTop: $(target).offset().top }, 500);
    });
  });
  // hide show top button on scroll
  const showHideTopBtn = function () {
    if ($(window).scrollTop() > 400) {
      // scrolling to bottom
      $("#myBtn").css({ right: "0%", transition: "800ms" });
      $("#bg_image_main").css({ "clip-path": "inset(7% 0 7% 0)"});

    } else {
      // top of the page
      $("#myBtn").css({ right: "-20%", transition: "800ms" });
      $("#bg_image_main").css({ "clip-path": `inset(0 0 80% 0)` });

    }
  };

  // toggle image logo and logo display on scroll handler
  const toggleLogoImages = function () {
    if ($(window).scrollTop() > 901) {
      $("#nav_logo_img").css({ opacity: "1", left: "0%" });
      $(".nav-logo").css({ opacity: "0", left: "-500%" });

    } else {
      $("#nav_logo_img").css({ opacity: "0", left: "-500%" });
      $(".nav-logo").css({ opacity: "1", left: "0%" });
    }
  };

  // flash achieve button on click
  $(".achi")
    .css({ all: "unset" })
    .on("click", function (e) {
      e.preventDefault();
      $("#achieve").addClass("flash-abtMe");
      setInterval(() => $("#achieve").removeClass("flash-abtMe"), 1000);
    });

  // run functions on scroll, resize and screenorientation
  // functions running on document scroll
  $(document).on("scroll", () => {
    removeMenu(), showHideTopBtn(), toggleLogoImages();
  });
  // functions running on window scroll
  $(window).on("scroll", () => sidebarsAppController(1200));
  // functions running on window orientationChange
  $(window).on("orientationChange", () => {
    removeMenu();
  });
  // functions running on window load
  $(window).on("load", () => {
    showHideTopBtn();
  });

  // pageUnavailable();
});
