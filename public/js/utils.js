const animateSkills = function (
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
};

export { animateSkills };
