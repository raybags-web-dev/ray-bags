"use strict";

// General jQuery function.
function all_jQuery_functionality() {
  $(document).ready(function () {
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
      element,
      item,
      width,
      delay,
      percentile,
      left
    ) {
      if (
        !element ||
        element == undefined ||
        width == undefined ||
        delay == undefined ||
        percentile == undefined ||
        left == undefined
      )
        return;

      $(window).on("scroll", () => {
        let top_of_element = $(element).offset().top;
        let bottom_of_element =
          $(element).offset().top + $(element).outerHeight();
        let bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        let top_of_screen = $(window).scrollTop();

        // in view port
        if (
          bottom_of_screen > top_of_element &&
          top_of_screen < bottom_of_element
        ) {
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
      $(".skills"),
      $(".value-50"),
      "50%",
      "2.5s",
      $(".skill-text-50"),
      "50%"
    );
    do_stuff_while_in_viewport(
      $(".skills"),
      $(".value-80"),
      "80%",
      "3s",
      $(".skill-text-80"),
      "80%"
    );
    do_stuff_while_in_viewport(
      $(".skills"),
      $(".value-85"),
      "85%",
      "3.8s",
      $(".skill-text-85"),
      "85%"
    );
    do_stuff_while_in_viewport(
      $(".skills"),
      $(".value-70"),
      "70%",
      "2.5s",
      $(".skill-text-70"),
      "70%"
    );
    do_stuff_while_in_viewport(
      $(".skills"),
      $(".value-75"),
      "75%",
      "2.8s",
      $(".skill-text-75"),
      "75%"
    );
    do_stuff_while_in_viewport(
      $(".skills"),
      $(".value-90"),
      "90%",
      "4s",
      $(".skill-text-90"),
      "90%"
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
      $("body, html").animate({ scrollTop: $(target).offset().top }, 1000);
      return false;
    }

    // smooth scrolling navigation on big screen
    $(".nav-links a").on("click", handlePageScroll);
    // smooth scrolling navigation on small screen
    $(".sidebar-links a").on("click", handlePageScroll);

    // smooth scrolling with back to top btn handler
    $("#myBtn").on("click", function () {
      let target = $("body, html");
      $("body, html").animate({ scrollTop: $(target).offset().top }, 1200);
    });

    // smooth scrolling with logo image handler
    $(".nav-logo").on("click", function () {
      let target = $("body, html");
      $("body, html").animate({ scrollTop: $(target).offset().top }, 1000);
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
    // functions running on document scroll
    $(document).on("scroll", () => {
      removeMenu(), showHideTopBtn();
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
      removeMenu(), showHideTopBtn();
    });
    // functions running on window orientationChange
    $(window).on("orientationChange", () => {
      removeMenu(), showHideTopBtn();
    });
    // functions running on window load
    $(window).on("load", () => {
      showHideTopBtn();
    });
  });
}
export { all_jQuery_functionality };
