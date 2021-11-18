"use strict";

// import { pageUnavailable } from "./mentainance.js";
import { animateSkills } from "./utils.js";
import { talent } from "./data.js";

// General jQuery handler.
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => $("#myBtn").removeClass("hide"), 1000);

  // apply image background on 
  $(".body-bg-image").removeClass("hide")

  // handle contact form submision handler
  const form = document.getElementById("contact_me_form");

  $("#contact_me_form").on("submit", function (e) {
    e.preventDefault();

    const _formData = new FormData(form);
    const name = _formData.get("name");

    $(".input-group").remove();
    $(".login-button").remove();

    $(".login-title").text(`Hi ${name}.`);

    const details = $("<p></p>")
      .attr({ class: "message-details" })
      .text("I'll get back to you as soon as possible");
    $("#contact_me_form").append(details);
  });

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

  // slide in top nav
  $(" .nav-links li").each((index, link)=>{
    $(link).delay(150 * index).animate({"margin-top": "0%"})
  })

  // Onload clear screen.
  $(".skeleton-wrapper").addClass("hide").animate({ opacity: 0 });

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
  animateSkills($(".value-70"), "70%", "2.5s", $(".skill-text-50"), "50%", 70);
  animateSkills($(".value-80"), "80%", "3s", $(".skill-text-80"), "80%", 80);
  animateSkills($(".value-85"), "85%", "3.8s", $(".skill-text-85"), "85%", 85);
  animateSkills($(".value-70"), "70%", "2.5s", $(".skill-text-70"), "70%", 70);
  animateSkills($(".value-75"), "75%", "2.8s", $(".skill-text-75"), "75%", 75);
  animateSkills($(".value-90"), "90%", "4s", $(".skill-text-90"), "85%", 90);

  // handle hero icon spead on load
  $(".hero-box-animate").each(function (index, icon) {
    $(icon)
      .delay(30 * index)
      .css({ "margin-right": "0rem" });
  });

  // parallax effect handler for all background images on site
  const parallax = function (image2) {
    if (!image2 || image2 == undefined) return;
    let wScroll = $(window).scrollTop();
    $(image2).css({
      "background-position": `center ${wScroll * 0.07}px`,
    });
  };

  // // handle themeSwitcher light theme
  $(".night").on("click", function () {
    // apply ripple effect on theme buttons
    $(this).addClass("theme_pulse");
    setTimeout(() => $(this).removeClass("theme_pulse"), 1000);
    // change inset box shadow for social icons on hero page
    $(".hero-social-icon .hero-box-animate").css({
      "box-shadow": "inset 0px 0px 10px 5px rgba(247, 9, 9, .5)",
    });
    // animate name color
    $(".inner-hero-name").css({ color: "#f7090980" });
    // change srevice container background
    $("#services").css({
      background: "rgba(247, 9, 9, .3)",
    });

    // change navbar background
    $(".nav").css({
      background: "rgba(247, 9, 9, .5)"
    })
    // skills container
    $("#skills").css({ background: "rgba(247, 9, 9, .3)"})
      // change footer background
      $("#bot-footer").css({
      background: "rgba(247, 9, 9, .5)",
    })
    // change hero image frame background
    $(".hero-image-wrapper").css({background: "rgba(247, 9, 9, .3)"});
       // login form
       $(".login-wrapper").css({
        background: "rgba(247, 9, 9, .5)"
      })
    $(".hero-image-catain")
      .animate({
        width: "92%",
        height: "92%",
      })
      .css({ background: "rgba(247, 9, 9, .)" });
    $(".hero-image-wrapper .pilot-hero-photo").css({
      filter: "grayscale(10%)",
    });

    // change service  card bg
    $(".s_card").each((e, element) => {
      $(element).css({
        background: "rgba(247, 9, 9, .3)",
      });
    });
    
    // blog cards
    $(".blog-card").each((e, element) => {
      $(element).css({
        background: "rgba(247, 9, 9, .5)",
      });
    });
    $(".full-card").css({ background: "rgba(247, 9, 9, .5)" });
  });


  // // handle themeswitcher dark theme
  $(".day").on("click", function () {
    // apply ripple effect on theme buttons
    $(this).addClass("theme_pulse");
    setTimeout(() => $(this).removeClass("theme_pulse"), 1000);

    // change inset box shadow for social icons on hero page
    $(".hero-social-icon .hero-box-animate").css({
      "box-shadow": "inset 0px 0px 10px 5px rgb(22, 84, 126, .5)",
    });
    // inner name color change
    $(".inner-hero-name").css({ color: "#0f73b6" });

    // Image catain
    $(".hero-image-catain")
      .animate({
        width: "92%",
        height: "92%",
      })
      .css({ background: "rgb(22, 84, 126, .1)" });
    $(".hero-image-wrapper .pilot-hero-photo").css({ filter: "grayscale(5%)" });

    $("#services").css({ background: "hsl(246, 48%, 8%, .3)" });

        // change navbar background
        $(".nav").css({
          background: "rgb(22, 84, 126, .6)",
        })
      // skills container
    $("#skills").css({ background: "hsl(246, 48%, 8%, .3)"})

        // change hero image frame background
        $(".hero-image-wrapper").css({background: "rgb(22, 84, 126, .6)"});

        // change footer background
       $("#bot-footer").css({
        background: "rgb(22, 84, 126, .6)",
      })

    // login form
    $(".login-wrapper").css({
      background: "rgb(22, 84, 126, .5)"
    })
    // change service  card bg
    $(".s_card").each((e, element) => {
      $(element).css({
        background: "rgb(22, 84, 126, .5)",
      });
    });
    // blog cards
    $(".blog-card").each((e, element) => {
      $(element).css({
        background: "rgb(22, 84, 126, .5)",
      });
    });
    $(".full-card").css({ background: "rgb(22, 84, 126, .5)" });
  });

  // orignal color theme
  $(".original").on("click", function () {
    // apply ripple effect on theme buttons
    $(this).addClass("theme_pulse");
    setTimeout(() => $(this).removeClass("theme_pulse"), 1000);
    // change inset box shadow for social icons on hero page
    $(".hero-social-icon .hero-box-animate").css({
      "box-shadow": "inset 0px 0px 10px 5px rgb(1, 94, 94, .6)",
    });
    // inner name color change
    $(".inner-hero-name").css({ color: "#015e5e" });

    // Image catain
    $(".hero-image-catain")
      .animate({
        width: "90%",
        height: "90%",
      })
      .css({ background: "rgb(1, 94, 94, .1)" });
    $(".hero-image-wrapper .pilot-hero-photo").css({
      filter: "grayscale(100%)",
    });
    // services container
    $("#services").css({ background: "rgb(1, 94, 94, .3)" });
    // change navbar background
    $(".nav").css({
      background: "rgb(1, 94, 94, .6)",
    })
     // skills container
     $("#skills").css({ background: "rgb(1, 94, 94, .3)"})

    // change hero image frame background
    $(".hero-image-wrapper").css({background: "rgb(1, 94, 94, .6)"});
             
       // change footer background
       $("#bot-footer").css({
        background: "rgb(1, 94, 94, .6)",
      })
    // login form
    $(".login-wrapper").css({
      background: "rgb(1, 94, 94, .5)"
    })
    // change service  card bg
    $(".s_card").each((e, element) => {
      $(element).css({
        background: "rgb(1, 94, 94, .5)",
      });
    });
    // blog cards
    $(".blog-card").each((e, element) => {
      $(element).css({
        background: "rgb(1, 94, 94, .5)",
      });
    });
    $(".full-card").css({ backgroundColor: "rgb(1, 94, 94, .5)" });
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
  const handlePageScroll = function () {
    let target = $(this).attr("href");
    $("body, html").animate({ scrollTop: $(target).offset().top }, 1900);
    return false;
  };

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
  $(".logo__1").each((index, logo) => {
    $(logo).on("click", function () {
      let target = $("body, html");
      $("body, html").animate({ scrollTop: $(target).offset().top }, 1900);
    });
  });

  // bounce theme balls effect
  (() => {
    const themeBallInterval = setInterval(() => {
      $(".theme-ball").each((index, themeBall) => {
        $(themeBall)
          .delay(200 * index)
          .queue(function (next) {
            $(this).effect("bounce", { times: 1 }, 300);
            next();
          });
      });
    }, 3000);

    $("#theme-container").on("click", () => {
      // jQuery.fx.off = true;
      $(".theme-ball").each((index, themeBall) => {
        $(themeBall).stop();
      }
      );
      clearInterval(themeBallInterval);
    });
  })();

  // hide show top button on scroll
  const showHideTopBtn = function () {
    if ($(window).scrollTop() > 400) {
      $("#myBtn").css({ right: "0%", transition: "1000ms" });
    } else {
      $("#myBtn").css({ right: "-20%", transition: "1000ms" });
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

  // hide show scroll down  arrow on scroll
  const showHideDownArrow = function () {
    if ($(window).scrollTop() <= 100) {
      $("#down_arrow").removeClass("hide");
      $("#down_arrow2").removeClass("hide");
    } else {
      $("#down_arrow").addClass("hide");
      $("#down_arrow2").addClass("hide");
    }
    return;
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
