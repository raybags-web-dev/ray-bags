"use strict";

function AllJqueryLogin() {
  $(document).ready(function () {
    console.log("Jquery is loaded");

    // handle side meny removal.
    const removeMenu = () => {
      $(".sidebar-links a").each(function () {
        $(this).on("click", function () {
          $("#sidebar").removeClass("show-sidebar");
        });
      });
    };


    // run functions on scroll, resize and screenorientation
    $(document).on("scroll", removeMenu);
    $(window).on("resize", removeMenu);
    $(window).on("orientationChange", removeMenu);
  });
}
export { AllJqueryLogin };
