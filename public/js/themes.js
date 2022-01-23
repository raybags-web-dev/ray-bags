const themes_functionality = function () {
  // // handle themeSwitcher light theme
  $(".night").on("click", function () {
    // change body background
    $("body").css({
      "background-image": "linear-gradient(45deg, #762b2b 0%, #000000 100%)",
    });
    // apply ripple effect on theme buttons
    $(this).addClass("theme_pulse");
    setTimeout(() => $(this).removeClass("theme_pulse"), 1000);
    // change inset box shadow for social icons on hero page
    $(".hero-social-icon .hero-box-animate").css({
      "box-shadow": "inset 0px 0px 10px 5px rgba(247, 9, 9, .2)",
      "border-color": "rgba(247, 9, 9, .4)",
    });

    // change carocel bg
    $(".card-content-div").css({
      "background-image":
        "linear-gradient(to right, rgba(247, 9, 9, .2) 10%, black 100%)",
    });
    // change footer incons background
    $(".footer_link .fab").each((index, icon) => {
      $(icon).css({ background: "rgba(247, 9, 9, .3)" });
    });
    // skills container
    $("#skills").css({ background: "rgba(247, 9, 9, .2)" });
    // change footer background
    $("#bot-footer").css({
      background: "rgba(247, 9, 9, .3)",
    });
    // change hero image frame background
    $(".hero-image-wrapper").css({ background: "rgba(247, 9, 9, .1.5)" });
    // login form
    $(".login-wrapper").css({
      background: "rgba(247, 9, 9, .3)",
    });
    //hero image catain
    $(".hero-image-catain")
      .animate({
        width: "100%",
        height: "100%",
      })
      .css({ background: "rgba(247, 9, 9, .1)" });
    $(".hero-image-wrapper .pilot-hero-photo").css({
      filter: "grayscale(10%)",
    });

    // change service  card bg
    $(".s_card").each((e, element) => {
      $(element).css({
        background: "rgb(118, 43, 43, 1)",
      });
    });
    // change about me btn background
    $(".aboutMeBTN").each((index, btn) => {
      $(btn)
        .delay(50 * index)
        .css({
          background: "rgba(247, 9, 9, .1)",
          color: "rgb(250, 248, 248)",
        });
    });
    // about info container background change
    $(".about-info").css({
      background: "rgb(118, 43, 43, .5)",
    });
    // change intro-text background container
    $(".intro-about").css({ background: "rgb(118, 43, 43, 1)" });
    // change about me image backdground
    $(".about-img").css({
      background: "rgba(247, 9, 9, .3)",
    });
    // blog cards
    $(".blog-card").each((e, element) => {
      $(element).css({
        background: "rgb(118, 43, 43, 1)",
      });
    });
    $(".full-card").css({ background: "rgb(118, 43, 43, .5)" });
  });

  // // handle themeswitcher dark theme
  $(".day").on("click", function () {
    // change body background
    $("body").css({
      "background-image": "linear-gradient(45deg, #2b3976 0%, #000000 100%)",
    });
    // apply ripple effect on theme buttons
    $(this).addClass("theme_pulse");
    setTimeout(() => $(this).removeClass("theme_pulse"), 1000);

    // change inset box shadow for social icons on hero page
    $(".hero-social-icon .hero-box-animate").css({
      "box-shadow": "inset 0px 0px 10px 5px rgb(22, 84, 126, .2)",
      "border-color": "rgb(22, 84, 126, .8)",
    });

    // Image catain
    $(".hero-image-catain")
      .animate({
        width: "100%",
        height: "100%",
      })
      .css({ background: "rgb(22, 84, 126, .1)" });
    $(".hero-image-wrapper .pilot-hero-photo").css({
      filter: "grayscale(10%)",
    });

    // change carocel bg
    $(".card-content-div").css({
      "background-image":
        "linear-gradient(to right, rgb(22, 84, 126, .3) 10%, black 100%)",
    });
    // change footer incons background
    $(".footer_link .fab").each((index, icon) => {
      $(icon).css({ background: "rgb(22, 84, 126, .3)" });
    });
    // skills container
    $("#skills").css({ background: "hsl(246, 48%, 8%, .2)" });

    // change hero image frame background
    $(".hero-image-wrapper").css({ background: "rgb(22, 84, 126, .2)" });

    // change footer background
    $("#bot-footer").css({
      background: "rgb(22, 84, 126, .5)",
    });

    // login form
    $(".login-wrapper").css({
      background: "rgb(22, 84, 126, .3)",
    });
    // change service  card bg
    $(".s_card").each((e, element) => {
      $(element).css({
        background: "rgb(22, 84, 126, .5)",
      });
    });
    // change about me btn background
    $(".aboutMeBTN").each((index, btn) => {
      $(btn)
        .delay(50 * index)
        .css({ background: "rgb(22, 84, 126, .3)" });
    });
    // about info container background change
    $(".about-info").css({
      background: "rgb(22, 84, 126, .1)",
    });
    // change intro-text background container
    $(".intro-about").css({ background: "rgb(22, 84, 126, .4)" });

    // change about me image backdground
    $(".about-img").css({
      background: "rgb(22, 84, 126, .5)",
    });
    // blog cards
    $(".blog-card").each((e, element) => {
      $(element).css({
        background: "rgb(22, 84, 126, .4)",
      });
    });
    $(".full-card").css({ background: "rgb(22, 84, 126, .5)" });
  });

  // orignal color theme
  $(".original").on("click", function () {
    // change body background
    $("body").css({
      "background-image": "linear-gradient(45deg, #205f25 0%, #000000 100%)",
    });
    // apply ripple effect on theme buttons
    $(this).addClass("theme_pulse");
    setTimeout(() => $(this).removeClass("theme_pulse"), 1000);
    // change inset box shadow for social icons on hero page
    $(".hero-social-icon .hero-box-animate").css({
      "box-shadow": "inset 0px 0px 10px 5px rgb(1, 94, 94, .2)",
      "border-color": "rgb(1, 94, 94, .9)",
    });

    // Image catain
    $(".hero-image-catain")
      .animate({
        width: "100%",
        height: "100%",
      })
      .css({ background: "rgb(1, 94, 94, .1)" });
    $(".hero-image-wrapper .pilot-hero-photo").css({
      filter: "grayscale(100%)",
    });
    // change carocel bg
    $(".card-content-div").css({
      "background-image":
        "linear-gradient(to right, rgb(1, 94, 94, .3) 10%, black 100%)",
    });
    // change footer incons background
    $(".footer_link .fab").each((index, icon) => {
      $(icon).css({ background: "rgb(1, 94, 94, .3)" });
    });
    // skills container
    $("#skills").css({ background: "rgb(1, 94, 94, .3)" });

    // change hero image frame background
    $(".hero-image-wrapper").css({ background: "rgb(1, 94, 94, .2)" });

    // change footer background
    $("#bot-footer").css({
      background: "rgb(1, 94, 94, .6)",
    });
    // login form
    $(".login-wrapper").css({
      background: "rgb(1, 94, 94, .3)",
    });
    // change service  card bg
    $(".s_card").each((e, element) => {
      $(element).css({
        background: "rgb(1, 94, 94, .5)",
      });
    });
    // change about me btn background
    $(".aboutMeBTN").each((index, btn) => {
      $(btn)
        .delay(50 * index)
        .css({ background: "rgb(1, 94, 94, .3)" });
    });
    // about info container background change
    $(".about-info").css({
      background: "rgb(1, 94, 94, .1)",
    });
    // change about me image backdground
    $(".about-img").css({
      background: "rgb(1, 94, 94, .3)",
    });
    // change intro-text background container
    $(".intro-about").css({ background: "rgb(1, 94, 94, .4)" });
    // blog cards
    $(".blog-card").each((e, element) => {
      $(element).css({
        background: "rgb(1, 94, 94, .3)",
      });
    });
    $(".full-card").css({ backgroundColor: "rgb(1, 94, 94, .5)" });
  });
};

export { themes_functionality };
