"use strict";

// General function.
function AllJqueryLogin() {
  $(document).ready(() => {
    console.log("Jquery is loaded");

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

    // run functions on scroll, resize and screenorientation
    $(document).on("scroll", removeMenu);
    $(window).on("resize", removeMenu);
    $(window).on("orientationChange", removeMenu);
  });
}
export { AllJqueryLogin };
