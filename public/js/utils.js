// import "regenerator-runtime/runtime.js";
import {
    createEmptyDataWrapper,
    createNewsDataWrapper,
    bitcoin,
} from "./helperFuncs.js";

// card factory function
const curacelCard = function() {
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
const mainCarocelContainer = function() {
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
    const curacelRunnerFunc = function() {
        let container = [];
        $(dummyArray).each(() => {
            let card = curacelCard();
            container.push(card);
        });

        $(container).each((index, card) => {
            $(".curacel-inner").append($(card));
        });
        // creating video component when card is clicked
        let cardsArray = [];
        $(".card-content-div").each((ind, card) => {
            $(card).on("click", async function() {
                try {
                    // Show news data ============== 
                    if ($(this).index() == 0) return createNewsDataWrapper("https://raybags.herokuapp.com/scrapper/v1/savenews");
                    if ($(this).index() == 3) return bitcoin("https://rest.coinapi.io/v1/exchanges");
                    return createEmptyDataWrapper();

                } catch (e) {
                    console.log(e.message);
                }

            });
            // make ============== data component ============== 

            cardsArray.push($(card));
            $($(cardsArray[0]).children()[0]).text("Daily News");
            $($(cardsArray[1]).children()[0]).text("Retail Data");
            $($(cardsArray[2]).children()[0]).text("Hotels data");
            $($(cardsArray[3]).children()[0]).text("Crypto Data");
            $($(cardsArray[4]).children()[0]).text("Flights data");
            $($(cardsArray[5]).children()[0]).text("Movies data");
            $($(cardsArray[6]).children()[0]).text("Stocks Data");
            $($(cardsArray[7]).children()[0]).text("Tech data");
            $($(cardsArray[8]).children()[0]).text("Fashion data");
            $($(cardsArray[9]).children()[0]).text("Business data");
            $($(cardsArray[10]).children()[0]).text("Travel Data");
            $($(cardsArray[11]).children()[0]).text("Space Data");
        });

        setTimeout(() => {
            $(".curacel-wrapper").css({
                width: "40%",
            });
        }, 4000);
    };
    curacelRunnerFunc();

    // minimize width for carocel and hide minimize button but show expand button
    $(".minimize_button").on("click", function() {
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
    $(".expand_button").on("click", function() {
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
};