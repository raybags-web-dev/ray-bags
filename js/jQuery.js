"use strict";

import { pageUnavailable } from "./mentainance.js";
import { talent } from "./data.js";

// General jQuery handler.
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => $("#myBtn").removeClass("hide"), 1000);

  // dynamic hero text handler
  (function () {
    let count = 0;
    setInterval(function () {
      $(".skill-desc span").animate({ width: "0%" });
      count++;
      $(".skill-desc").fadeOut(300, function () {
        $(this)
          .text(talent[count % talent.length])
          .fadeIn(500);
      });
    }, 5000);
  })();

  // Onload clear screen.
  $(".whole_body").css(
    {
      filter: "unset",
    },
    6000
  );

  $("#nav").slideDown("1000", function () {
    $(this).addClass("navbar-fixed").css({
      top: "0%",
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

  // handle skills level animation
  function do_stuff_while_in_viewport(
    item,
    width,
    delay,
    percentile,
    left,
    percentile_limit
  ) {
    if (
      width == undefined ||
      delay == undefined ||
      percentile == undefined ||
      (left == undefined) | (percentile_limit == undefined)
    )
      return;

    $(window).on("scroll", function () {
      let top_of_element = $(".skills").offset().top;
      let bottom_of_element =
        $(".skills").offset().top + $(".skills").outerHeight();
      let bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
      let top_of_screen = $(window).scrollTop();

      // in view port
      if (
        bottom_of_screen > top_of_element &&
        top_of_screen < bottom_of_element
      ) {
        // incremenet skill percentage value when in viewport
        let percentage_value = $(percentile);
        let value = percentile_limit;

        $(".testimonial_individual_image").css({
          "animation-play-state": "running",
        });

        // animation for skills level
        $({ percentage: 0 })
          .stop(true)
          .animate(
            { percentage: value },
            {
              duration: 2000,
              easing: "easeOutExpo",
              step: function () {
                let percentageVal = Math.round(this.percentage * 10) / 10;
                percentage_value
                  .text(percentageVal + "%")
                  .addClass("animate-percentage")
                  .css({ color: "white", opacity: ".5" });
              },
            }
          )
          .promise()
          .done(() => {
            // hard set the value after animation is done to be
            // sure the value is correct
            percentage_value
              .text(Math.floor(value) + "%")
              .css({ "font-style": "italic" });
          });

        // slidein percentage
        $(percentile).css({
          left: left,
          opacity: "1",
          transition: "1s",
          color: "#FFFFFF",
        });
        // animate skill bar
        $(item).css({
          width: width,
          opacity: "1",
          transition: delay,
        });
      } else {
        // slideout percentage
        $(percentile).css({
          left: "1%",
          opacity: "0",
          transition: "1s",
          color: "red",
        });
        // remove skill bar
        $(item).css({
          width: "0",
          opacity: "0",
          transition: delay,
        });
      }
    });
  }
  do_stuff_while_in_viewport(
    $(".value-70"),
    "70%",
    "2.5s",
    $(".skill-text-50"),
    "50%",
    70
  );
  do_stuff_while_in_viewport(
    $(".value-80"),
    "80%",
    "3s",
    $(".skill-text-80"),
    "80%",
    80
  );
  do_stuff_while_in_viewport(
    $(".value-85"),
    "85%",
    "3.8s",
    $(".skill-text-85"),
    "85%",
    85
  );
  do_stuff_while_in_viewport(
    $(".value-70"),
    "70%",
    "2.5s",
    $(".skill-text-70"),
    "70%",
    70
  );
  do_stuff_while_in_viewport(
    $(".value-75"),
    "75%",
    "2.8s",
    $(".skill-text-75"),
    "75%",
    75
  );
  do_stuff_while_in_viewport(
    $(".value-90"),
    "90%",
    "4s",
    $(".skill-text-90"),
    "85%",
    90
  );

  // handle hero icon spead on load
  $(".hero-box-animate").each(function (index, icon) {
    $(icon)
      .delay(30 * index)
      .css({ "margin-right": "0rem" });
  });

  // parallax effect handler for all background images on site
  function parallax(image2) {
    if (!image2 || image2 == undefined) return;
    let wScroll = $(window).scrollTop();
    $(image2).css({
      "background-position": `center ${wScroll * 0.07}px`,
    });
  }

  // handle themeswitcher dark theme
  $(".day").on("click", function () {
    $(this).css({
      display: "none",
    });
    // change inset box shadow for social icons on hero page
    $(".hero-social-icon .hero-box-animate").css({
      "box-shadow": "inset 0px 0px 10px 5px rgba(2, 86, 126, 0.5)",
    });
    $(".inner-hero-name").css({ color: "#5e5ef1" });
    // animate links
    $(".achor-link").each((index, link) => {
      $(link).css({
        backgroundImage: "linear-gradient(to top, #5e5ef1 30%, #f7090980 100%)",
      });
    });
    // animate logo
    $(".nav-logo").css({ filter: "grayscale(100%)" });

    // animate hero name span
    $(".inner-hero-name span").css({ "min-width": "100%" });
    $(".inner-hero-name span").delay(500).animate({ "min-width": "0%" });
    // animate arrow
    $("#down_arrow, #down_arrow2").css({ color: "#5e5ef1" });
    // Image catain
    $(".hero-image-catain")
      .animate({
        width: "92%",
        height: "92%",
      })
      .css({ background: "rgba(2, 4, 121, 0.3)" });

    $(".night").css({
      display: "block",
    });

    // change body background
    $("body").removeClass("classLighTheme");
    $("body").addClass("classDarkTheme");

    // change nav background
    $(".navbar-fixed").addClass("classDarkTheme");
    $(".navbar-fixed").removeClass("classLightTheme");

    // change hire me button
    $(".hero-btn").removeClass("classDarkTheme");
    $(".hero-btn").addClass("classLightTheme");

    // change blog vibe card bg
    $(".card").each((e, element) => {
      $(element).css({
        background: "#0d0b1f",
      });
    });
    // change service  card bg
    $(".s_card").each((e, element) => {
      $(element).css({
        background: "#0d0b1f",
      });
    });
    $(".full-card").css({ background: "#243261" });
  });

  // handle themeSwitcher light theme

  $(".night").on("click", function () {
    $(this).css({
      display: "none",
    });
    // change inset box shadow for social icons on hero page
    $(".hero-social-icon .hero-box-animate").css({
      "box-shadow": "inset 0px 0px 10px 5px rgba(85, 1, 1, 0.5)",
    });
    // animate name color
    $(".inner-hero-name").css({ color: "#f7090980" });
    // animate arrow
    $("#down_arrow, #down_arrow2").css({ color: "#ff0000" });

    // animate name
    $(".inner-hero-name span").css({ "min-width": "100%" });
    $(".inner-hero-name span").delay(500).animate({ "min-width": "0%" });

    $(".achor-link").each((index, link) => {
      $(link).css({
        backgroundImage: "linear-gradient(to top, #ff0000 30%, #f7090980 100%)",
      });
    });
    $(".nav-logo ").css({ filter: "grayscale(90%)" });

    $(".hero-image-catain")
      .animate({
        width: "92%",
        height: "92%",
      })
      .css({ background: "rgba(121, 29, 29, 0.5)" });

    $(".day").css({
      display: "none",
    });
    $(".original").css({
      display: "block",
    });

    // change body background
    $("body").addClass("classLighTheme");
    $("body").removeClass("classDarkTheme");

    // change nav background
    $(".navbar-fixed").removeClass("classDarkTheme");
    $(".navbar-fixed").addClass("classLightTheme");

    // change hire me button
    $(".hero-btn").addClass("classDarkTheme");
    $(".hero-btn").removeClass("classLightTheme");

    // change blog vibe card bg
    $(".card").each((e, element) => {
      $(element).css({
        background: "#4b0202",
      });
    });
    // change service  card bg
    $(".s_card").each((e, element) => {
      $(element).css({
        background: "#4b0202",
      });
    });
    $(".full-card").css({ background: "#4b0202" });
  });

  // orignal color theme
  $(".original").on("click", function () {
    $(this).css({
      display: "none",
    });

    // change inset box shadow for social icons on hero page
    $(".hero-social-icon .hero-box-animate").css({
      "box-shadow": "inset 0px 0px 10px 5px rgba(83, 82, 82, 0.5)",
    });
    
    $(".inner-hero-name").css({ color: "#73dfdf" });

    $(".achor-link").each((index, link) => {
      $(link).css({
        backgroundImage: "linear-gradient(to top, #73dfdf 30%, #f7090980 100%)",
      });
    });

    $(".nav-logo ").css({ filter: "grayscale(100%)" });

    // animate arrow
    $("#down_arrow, #down_arrow2").css({ color: "#73dfdf" });
    // animate hero name span
    $(".inner-hero-name span").css({ "min-width": "100%" });
    $(".inner-hero-name span").delay(500).animate({ "min-width": "0%" });

    // Image catain
    $(".hero-image-catain")
      .animate({
        width: "90%",
        height: "90%",
      })
      .css({ background: "rgba(121, 29, 29, 0.2)" });

    $(".day").css({
      display: "block",
    });
    $(".night").css({
      display: "none",
    });

    // change body background
    $("body").removeClass("classLighTheme");
    $("body").removeClass("classDarkTheme");

    // change nav background
    $(".navbar-fixed").removeClass("classDarkTheme");
    $(".navbar-fixed").removeClass("classLightTheme");

    // change hire me button
    $(".hero-btn").removeClass("classDarkTheme");
    $(".hero-btn").removeClass("classLightTheme");

    // change blog vibe card bg
    $(".card").each((e, element) => {
      $(element).css({
        background: "#110c0c",
      });
    });
    // change service  card bg
    $(".s_card").each((e, element) => {
      $(element).css({
        background: "#110c0c ",
      });
    });
    $(".full-card").css({ backgroundColor: "rgba(19, 13, 13, 0.5)" });
  });

  // toggle nav slide in out on scroll
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 100) {
      $("#nav").slideDown("1000", function () {
        $(this).addClass("navbar-fixed");
      });
    } else {
      $("#nav").fadeIn("1000", function () {
        $(this);
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

  // handle Smooth scrolling helper
  function handlePageScroll() {
    let target = $(this).attr("href");
    $("body, html").animate({ scrollTop: $(target).offset().top }, 1900);
    return false;
  }

  // smooth scrolling navigation on big screen
  $(".nav-links a").on("click", handlePageScroll);
  // smooth scrolling navigation on small screen
  $(".sidebar-links a").on("click", handlePageScroll);

  // smooth scrolling with back to top btn handler
  $("#myBtn").on("click", function () {
    let target = $("body, html");
    $("body, html").animate({ scrollTop: $(target).offset().top }, 1900);
  });

  // smooth scrolling with logo image handler
  $(".nav-logo").on("click", function () {
    let target = $("body, html");
    $("body, html").animate({ scrollTop: $(target).offset().top }, 1900);
  });

  // hide show top button on scroll
  function showHideTopBtn() {
    if ($(window).scrollTop() > 400) {
      $("#myBtn").css({ right: "0%", transition: "1000ms" });
    } else {
      $("#myBtn").css({ right: "-20%", transition: "1000ms" });
    }
  }

  // toggle image logo and logo display on scroll handler
  function toggleLogoImages() {
    if ($(window).scrollTop() > 901) {
      $("#nav_logo_img").css({ opacity: "1", left: "0%" });
      $(".nav-logo").css({ opacity: "0", left: "-500%" });
    } else {
      $("#nav_logo_img").css({ opacity: "0", left: "-500%" });
      $(".nav-logo").css({ opacity: "1", left: "0%" });
    }
  }

  // hide show scroll down  arrow on scroll
  function showHideDownArrow() {
    if ($(window).scrollTop() <= 100) {
      $("#down_arrow").removeClass("hide");
      $("#down_arrow2").removeClass("hide");
    } else {
      $("#down_arrow").addClass("hide");
      $("#down_arrow2").addClass("hide");
    }
  }
  // flash achieve button on click
  $(".achi")
    .css({ all: "unset" })
    .on("click", function (e) {
      e.preventDefault();
      $("#achieve").css({
        background: "#ffffff",
        color: "#000000",
      });
    });
  // smooth scrolling to contact form
  $("#achii").on("click", function () {
    let target = $("#loginSection");
    $("body, html").animate({ scrollTop: $(target).offset().top }, 1900);
  });

  // smooth scrolling to contact video section
  $("#mee").on("click", function () {
    $("#inVideoBTN_Contact")
      .delay(2300)
      .css({ background: "#FFFFFF", color: "#000000", opacity: "0.7" });

    let target = $("#contact");
    $("body, html").animate({ scrollTop: $(target).offset().top }, 1900);
  });

  // run functions on scroll, resize and screenorientation
  // functions running on document scroll
  $(document).on("scroll", () => {
    removeMenu(), showHideTopBtn(), showHideDownArrow(), toggleLogoImages();
  });
  // functions running on window scroll
  $(window).on("scroll", () => {
    parallax($(".services_background"));
  });
  // functions running on window orientationChange
  $(window).on("orientationChange", () => {
    removeMenu(), showHideDownArrow();
  });
  // functions running on window load
  $(window).on("load", () => {
    showHideTopBtn();
  });

  // pageUnavailable();
});
