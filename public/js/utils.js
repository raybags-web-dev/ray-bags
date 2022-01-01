import { video_component } from "./video.js";

// side apps handler
const createSideApps = function () {
  const icon1 = $("<i />").attr({ class: "fas fa-phone app" });
  const icon2 = $("<i />").attr({ class: "fas fa-bullseye app" });
  const icon3 = $("<i />").attr({ class: "far fa-envelope app" });
  const icon4 = $("<i />").attr({ class: "fab fa-whatsapp app" });
  const icon5 = $("<i />").attr({ class: "fab fa-facebook-messenger app" });
  const icon6 = $("<i />").attr({ class: "far fa-comment-dots app" });

  const inner_side_bar = $("<div></div>")
    .attr({ class: "sidebars-inner" })
    .append($(icon1), $(icon2), $(icon3), $(icon4), $(icon5), $(icon6));

  const sidebar = $("<div></div>")
    .attr({ class: "sidebar-wrapper" })
    .append($(inner_side_bar));
  $("body").append($(sidebar));
};
// show sidebar apps container on scroll to middle of page
const sidebarsAppController = function (offset) {
  if (!offset) return;
  if ($(window).scrollTop() >= offset) {
    $(".sidebar-wrapper").addClass("show_sideapp");
  } else {
    $(".sidebar-wrapper").removeClass("show_sideapp");
  }
};

// remove sidebar apps container on if icons are clicked
const side_app_remove = function () {
  $(".app").each((ind, icon) => {
    $(icon).on("click", function () {
      $(".sidebar-wrapper").removeClass("show_sideapp");
    });
  });
};

// card factory function
const curacelCard = function () {
  const playIcon = $("<i /> ").attr({ class: "fas fa-play", id: "play-icon" });
  const innerDivv = $("<div />")
    .attr({ class: "icon-div" })
    .append($(playIcon));
  const para1 = $("<p></p>").text("Coming Soon");
  const cardDIV = $("<div></div>")
    .attr({ class: "card-content-div" })
    .append($(para1), $(innerDivv));

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

  const inner_div = $("<div></div>").attr({ class: "curacel-inner" });
  const main_container = $("<div></div>")
    .attr({ class: "curacel-wrapper" })
    .append($(inner_div), $(div_left), $(div_right));

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

    let cardsArray = [];
    $(".card-content-div").each((ind, card) => {
      // video testing
      $(card).on("click", function () {
        let video_componett = video_component();
        // create component
        $("body").prepend($(video_componett));
        // remove component
        $($(video_componett).children()[1]).on("click", () => {
          $($(video_componett)).remove();
        });
      });

      cardsArray.push($(card));
      $($(cardsArray[0]).children()[0]).text("Data Models");
      $($(cardsArray[1]).children()[0]).text("Relational databases");
      $($(cardsArray[2]).children()[0]).text("Non relational databases");
      $($(cardsArray[3]).children()[0]).text("Information flow");
      $($(cardsArray[4]).children()[0]).text(
        "Query execution and optimization"
      );
      $($(cardsArray[5]).children()[0]).text("Data stores");
      $($(cardsArray[6]).children()[0]).text("Logical Operations");
      $($(cardsArray[7]).children()[0]).text(
        "Comparative analysis of data stores"
      );
      $($(cardsArray[8]).children()[0]).text("Database setup and Management");
      $($(cardsArray[9]).children()[0]).text("Data Modeling techniques");
      $($(cardsArray[10]).children()[0]).text("ETL design");
      $($(cardsArray[11]).children()[0]).text("Architectural projections");
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
      width: "2%",
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

export {
  mainCarocelContainer,
  sidebarsAppController,
  createSideApps,
  side_app_remove,
};
