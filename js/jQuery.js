"use strict";

// General jQuery function.
function AllJqueryLogin() {
  $(document).ready(() => {
    console.log("Jquery is loaded");
    $("#myBtn").removeClass("hide");

    // handle side meny removal.
    const removeMenu = () => {
      $(".sidebar-links a").each(function () {
        $(this).on("click", function () {
          $("#sidebar").removeClass("show-sidebar");
        });
      });
    };

    // in viewport functiuon
    $(window).on("scroll", function () {
      let top_of_element = $(".hero-photo").offset().top;
      let bottom_of_element =
        $(".hero-photo").offset().top + $(".hero-photo").outerHeight();
      let bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
      let top_of_screen = $(window).scrollTop();

      bottom_of_screen > top_of_element && top_of_screen < bottom_of_element
        ? $(".hero-photo").addClass("oulineClass")
        : $(".hero-photo").removeClass("oulineClass");
    });

    // toggle nav slide in out on scroll
    $(window).on("scroll", function () {
      if ($(window).scrollTop() >= 20) {
        $("#nav").slideDown("1000", function () {
          $(this).addClass("navbar-fixed").css({
            top: "1%",
            opacity: ".5",
          });

          $(".nav-logo").animate({
            opacity: "1",
            "z-index": "-8",
          });

          $(".nav-header").css({
            "box-shadow": "unset",
          });
        });
      } else {
        $("#nav").fadeIn("1000", function () {
          $(this).css({
            top: "0%",
            "backdrop-filter": "blur(100px)",
            opacity: "1",
          });

          $(".nav-logo").animate({
            opacity: "1",
          });

          $(".nav-header").css({
            "box-shadow": "inherit",
          });
        });
      }
    });

    // handle Smooth scrolling helper
    function handlePageScroll() {
      let target = $(this).attr("href");
      $("body, html").animate({ scrollTop: $(target).offset().top }, 500);
      return false;
    }

    // smooth scrolling navigation on big screen
    $(".nav-links a").on("click", handlePageScroll);
    // smooth scrolling navigation on small screen
    $(".sidebar-links a").on("click", handlePageScroll);

    // smooth scrolling with back to top btn handler
    $("#myBtn").on("click", function () {
      let target = $("body");
      $("body, html").animate({ scrollTop: $(target).offset().top }, 500);
    });

    // smooth scrolling with logo image handler
    $(".nav-logo").on("click", function () {
      let target = $("body");
      $("body, html").animate({ scrollTop: $(target).offset().top }, 500);
    });

    // hide show top button on scroll
    function showHideTopBtn() {
      if ($(window).scrollTop() > 400) {
        $("#myBtn").css({ right: "0%", transition: "1000ms" });
      } else {
        $("#myBtn").css({ right: "-20%", transition: "1000ms" });
      }
    }

    // run functions on scroll, resize and screenorientation
    $(document).on("scroll", () => {
      removeMenu(), showHideTopBtn();
    });
    $(window).on("resize", () => {
      removeMenu(), showHideTopBtn();
    });
    $(window).on("orientationChange", () => {
      removeMenu(), showHideTopBtn();
    });
    $(window).on("load", () => {
      console.log("it works");
      showHideTopBtn();
    });
  });
}
export { AllJqueryLogin };
