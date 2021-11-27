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
const curacelCard = function (image_link) {
  const image = $("<img />").attr({
    class: "card_bg_carocel",
    src: `${image_link}`,
  });
  const para1 = $("<p></p>").text("Coming Soon");
  const cardDIV = $("<div></div>")
    .attr({ class: "card-content-div" })
    .append($(para1), $(image));

  return $(cardDIV);
};

// curacel slide animation
const mainCarocelContainer = function () {
  const dummyArray = [
    "card1",
    "card2",
    "card3",
    "card4",
    "card5",
    "card6",
    "card7",
    "card8",
    "card9",
    "card10",
    "card11",
    "card12",
  ];

  const leftButton = $("<i></i>").attr({ class: "fas fa-caret-right" });
  const rightButton = $("<i></i>").attr({ class: "fas fa-caret-left" });

  const div_left = $("<div></div>")
    .attr({ class: "expand_button" })
    .append($(leftButton));
  const div_right = $("<div></div>")
    .attr({ class: "minimize_button" })
    .append($(rightButton));

  // close button
  const closeIcon = $("<i></i>").attr({ class: "fas fa-times" });

  const closeBtn = $("<button></button>")
    .attr({ class: "close-carosel-container" })
    .append($(closeIcon));

  const inner_div = $("<div></div>").attr({ class: "curacel-inner" });

  const main_container = $("<div></div>")
    .attr({ class: "curacel-wrapper" })
    .append($(inner_div), $(closeBtn), $(div_left), $(div_right));

  $("body").append($(main_container));

  // create card creating function for each array number
  const curacelRunnerFunc = function () {
    let container = [];
    $(dummyArray).each(() => {
      let card = curacelCard();
      container.push(card);
    });

    $(container).each((index, card) => {
      $(".curacel-inner").append($(card));
    });

    $(".card-content-div").each((ind, card) => {
      let cardsArray = [];
      cardsArray.push($(card));
      $($(cardsArray[0]).children()[0]).text("dedication");
      $($(cardsArray[1]).children()[0]).text("resilence");
      $($(cardsArray[2]).children()[0]).text("commitment");
      $($(cardsArray[3]).children()[0]).text("determination");
      $($(cardsArray[4]).children()[0]).text("dreamer");
      $($(cardsArray[5]).children()[0]).text("beleiver");
      $($(cardsArray[6]).children()[0]).text("Confident");
      $($(cardsArray[7]).children()[0]).text("winning");
      $($(cardsArray[8]).children()[0]).text("positive");
      $($(cardsArray[9]).children()[0]).text("Happy");
      $($(cardsArray[10]).children()[0]).text("appreciative");
      $($(cardsArray[11]).children()[0]).text("hopeful");
    });

    setTimeout(() => {
      $(".curacel-wrapper").css({
        width: "50%",
      });
    }, 4000);
  };
  curacelRunnerFunc();

  // minimize width for carocel and hide minimize button but show expand button
  $(".minimize_button").on("click", function () {
    $(".curacel-wrapper").css({
      width: "3%",
    });
    $(".curacel-inner").css({
      width: "0%",
    });

    $(this).css({
      display: "none",
    });
    $(".expand_button").css({
      opacity: 1,
      display: "flex",
    });
  });
  // expand width for carocel and show minimize bitton but hide expand button

  $(".expand_button").on("click", function () {
    $(".curacel-wrapper").css({
      width: "50%",
    });
    $(this).css({
      opacity: 0,
      display: "none",
    });
    $(".curacel-inner").css({
      width: "400%",
    });
    $(".minimize_button").css({
      opacity: 1,
      display: "flex",
    });
  });

  // remove carocel on click
  $(".close-carosel-container").on("click", () => {
    $(".curacel-wrapper").remove();
  });
};

export { animateSkills, mainCarocelContainer };
