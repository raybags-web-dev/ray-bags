// skills percentage animation handler
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

// card factory function
const curacelCard = function (parentContainer, image_link) {
  const image = $("<img />").attr({class:"card_bg_carocel", src: `${image_link}`})
  const para1 = $("<p></p>").text(
    "still work in process, check back later"
  );
  const cardDIV = $("<div></div>")
    .attr({ class: "card-content-div" })
    .append($(para1), $(image));

  return $(parentContainer).append($(cardDIV));
};

// curacel slide animation
const mainCarocelContainer = function () {
  const dummyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  // close button
  const closeIcon = $("<i></i>").attr({ class: "fas fa-times" });

  const closeBtn = $("<button></button>")
    .attr({ class: "close-carosel-container" })
    .append($(closeIcon));

  const inner_div = $("<div></div>").attr({ class: "curacel-inner" });

  const main_container = $("<div></div>")
    .attr({ class: "curacel-wrapper" })
    .append($(inner_div), $(closeBtn));

  $(".hero-center").append($(main_container));
  // call card creating function for each array number
  $(dummyArray).each((index, number) => {
    curacelCard($(".curacel-inner"), `/public/images/_x.jpg`);
  });

  // carocel animation
  const myInterval = function () {
    let offset = 500;
    const refreshInteravl = setInterval(() => {
      let x = (offset -= 100);
      if (x === 100) offset = 500;
      $(".curacel-inner").css({ width: `${x}%` });
    }, 3000);

    // pause animation on hover
    $(".card-content-div").each((index, card) => {
      $(card).on("mouseenter", (e) => {
        clearInterval(refreshInteravl);
      });

      // resume animation on mouseleave
      $(card).on("mouseleave", () => {
        return myInterval();
      });
    });

    // ==========remove carocel if viewport is less than 900px=========
    // Returns width of browser viewport

    $(window).on("resize", () => {
      let viiewportWidth = $(window).width();

      if (viiewportWidth <= `${991}`) {
        clearInterval(refreshInteravl);
        $(".curacel-wrapper").remove();
      }
    });

    // Returns width of HTML document

    return refreshInteravl;
  };
  myInterval();
  // remove carocel on click
  $(".close-carosel-container").on("click", () => {
    clearInterval(myInterval().refreshInteravl);
    $(".curacel-wrapper").fadeOut().remove();
  });
};

export { animateSkills, mainCarocelContainer };
