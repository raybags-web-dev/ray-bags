"use strict";

$(document).ready(function () {
  $(".inner-dropdown").removeClass("hide");

  // open menu handler
  function openMenu() {
    $(this).addClass("hide");
    $(".inner-dropdown ").css({ bottom: "0%" });
    $(".fa-times").removeClass("hide").css({
      position: "fixed",
    });

    $(".inner-dropdown a").each((indx, ele) => {
      $(ele).addClass("fadeInLinks");
    });
  }
  // close menu hanbdler
  function closeMenu() {
    $(this).addClass("hide");
    $(".inner-dropdown ").css({ bottom: "100%" });
    $(".fa-bars").removeClass("hide");
    $(".inner-dropdown a").each((indx, ele) => {
      $(ele).removeClass("fadeInLinks");
    });
  }

  // close menu on any link click
  $(".inner-dropdown a").each((indx, ele) => {
    $(ele).on("click", (e) => {
      $(".inner-dropdown ").css({ bottom: "100%" });
      $(".fa-bars").removeClass("hide");
      $(".fa-times").addClass("hide");
      // e.preventDefault();
    });
  });

  // closeMenu by ckicking on body handler
  $(".fa-bars").on("click", openMenu);
  $(".fa-times").on("click", closeMenu);

  // toggle details text for project

  $(".fa-question-circle").on("click", function () {
    $(".text-container").slideToggle();
  });

  // slide in porject containers if in view-port
  function clip_path() {}
  $(".item").each(function (index, element) {
    $(window).scroll(function () {
      let top_of_element = $(element).offset().top,
        bottom_of_element = $(element).offset().top + $(element).outerHeight(),
        bottom_of_screen = $(window).scrollTop() + $(window).innerHeight(),
        top_of_screen = $(window).scrollTop();

      if (
        bottom_of_screen > top_of_element &&
        top_of_screen < bottom_of_element
      ) {
        $(element).css({
          "clip-path": "inset(0% round 0%)",
          transition: ".5s",
        });
      } else {
        $(element).css({
          "clip-path": "inset(50% round 50%)",
          transition: ".5s",
        });
      }
    });
  });

  // update time in footer handler
  const time = () => new Date().getFullYear();
  $(window).on("scroll", () => {
    $(".copyrightYear").text(time);
  });

  // fun fadein projects containers on scroll handler
  $(window).on("scroll", clip_path);
});
