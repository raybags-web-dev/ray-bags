"use strict";
// =======vanilla JS ==========

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

// Open navbar handler
function openNavBar(openNavBTN, nav) {
  openNavBTN.addEventListener("click", function () {
    nav.classList.add("show-sidebar");
  });
}
// close navbar handler
function closeNavBar(closeNavBTN, nav) {
  closeNavBTN.addEventListener("click", function () {
    nav.classList.remove("show-sidebar");
  });
}
// General jQuery handler.
function all_jQuery_functionality() {
  $(document).ready(function () {
    $("#myBtn").removeClass("hide");

    $("#nav").slideDown("1000", function () {
      $(this).addClass("navbar-fixed").css({
        top: "0%",
      });
    });

    // flash skill button link handler
    $(".hyperMeLink").on("click", function (e) {
      e.preventDefault();
      $("#mySkills").addClass("flash-abtMe");
      setTimeout(() => {
        $("#mySkills").removeClass("flash-abtMe");
      }, 1000);
    });

    // Onload clear screen.
    $(".whole_body").css(
      {
        filter: "unset",
      },
      6000
    );

    // handle side nav removal if individual nav links are clicked.
    const removeMenu = () => {
      $(".sidebar-links a").each(function () {
        $(this).on("click", function () {
          $("#sidebar").removeClass("show-sidebar");
        });
      });
    };

    // in viewport function for animating hero profile pic
    $(window).on("scroll", () => {
      let top_of_element = $(".hero-photo").offset().top;
      let bottom_of_element =
        $(".hero-photo").offset().top + $(".hero-photo").outerHeight();
      let bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
      let top_of_screen = $(window).scrollTop();

      bottom_of_screen > top_of_element && top_of_screen < bottom_of_element
        ? $(".hero-photo").addClass("oulineClass")
        : $(".hero-photo").removeClass("oulineClass");
    });

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
                    .css({ color: "black", opacity: ".5" });
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
              $(".animate-percentage").css({
                background: "green",
                color: "white",
                opacity: ".7",
              });
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
      $(".value-50"),
      "50%",
      "2.5s",
      $(".skill-text-50"),
      "50%",
      50
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
    // parallax effect handler for all background images on site
    function parallax(image1, image2, image3) {
      if (
        !image1 ||
        image1 == undefined ||
        !image2 ||
        image2 == undefined ||
        !image3 ||
        image3 == undefined
      )
        return;
      let wScroll = $(window).scrollTop();
      $(image1).css({
        "background-position": `center ${wScroll * 0.07}px`,
      });
      $(image2).css({
        "background-position": `center ${wScroll * 0.07}px`,
      });
      $(image3).css({
        "background-position": `center ${wScroll * 0.01}px`,
      });
    }

    // toggle nav slide in out on scroll
    $(window).on("scroll", function () {
      if ($(window).scrollTop() >= 100) {
        $("#nav").slideDown("1000", function () {
          $(this).addClass("navbar-fixed").css({
            top: "0%",
          });

          $(".nav-header").css({
            "box-shadow": "unset",
          });
        });
      } else {
        $("#nav").fadeIn("1000", function () {
          $(this).css({
            top: "2%",
          });

          $(".nav-header").css({
            "box-shadow": "inherit",
          });
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
      $("body, html").animate({ scrollTop: $(target).offset().top }, 1500);
      return false;
    }

    // smooth scrolling navigation on big screen
    $(".nav-links a").on("click", handlePageScroll);
    // smooth scrolling navigation on small screen
    $(".sidebar-links a").on("click", handlePageScroll);

    // smooth scrolling with back to top btn handler
    $("#myBtn").on("click", function () {
      let target = $("body, html");
      $("body, html").animate({ scrollTop: $(target).offset().top }, 1800);
    });

    // smooth scrolling with logo image handler
    $(".nav-logo").on("click", function () {
      let target = $("body, html");
      $("body, html").animate({ scrollTop: $(target).offset().top }, 1500);
    });

    // hide show top button on scroll
    function showHideTopBtn() {
      if ($(window).scrollTop() > 400) {
        $("#myBtn").css({ right: "0%", transition: "1000ms" });
      } else {
        $("#myBtn").css({ right: "-20%", transition: "1000ms" });
      }
    }

    // hide show scroll down  arrow on scroll
    function showHideDownArrow() {
      if ($(window).scrollTop() <= 100) {
        $("#down_arrow").removeClass("hide");
        $("#down_arrow2").removeClass("hide");
        // move 3D background on scroll
        $(".floor").css({
          transform: "rotateY(235deg)",
          "background-size": "100%, 3em 3em",
          "animation-play-state": "paused",
          transition: ".6s",
        });
        $(".scene").css({ top: "0%" });
      } else {
        $("#down_arrow").addClass("hide");
        $("#down_arrow2").addClass("hide");
        // move 3D background on scroll
        $(".floor").css({
          "animation-play-state": "running",
          transition: ".6s",
        });
        $(".scene").css({ top: "-9%" });
      }
    }
    // run functions on scroll, resize and screenorientation
    // functions running on document scroll
    $(document).on("scroll", () => {
      removeMenu(), showHideTopBtn(), showHideDownArrow();
    });
    // functions running on window scroll
    $(window).on("scroll", () => {
      parallax(
        $(".hero_background"),
        $(".services_background"),
        $(".teminalial_image")
      );
    });
    // functions running on window resize
    $(window).on("resize", () => {
      removeMenu(), showHideTopBtn(), showHideDownArrow();
    });
    // functions running on window orientationChange
    $(window).on("orientationChange", () => {
      removeMenu(), showHideTopBtn(), showHideDownArrow();
    });
    // functions running on window load
    $(window).on("load", () => {
      showHideTopBtn();
    });
  });
}
export {
  all_jQuery_functionality,
  copyRightYear,
  handleInnerScroll,
  openNavBar,
  closeNavBar,
};
