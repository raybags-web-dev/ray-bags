// import "regenerator-runtime/runtime.js";
import {
    createEmptyDataWrapper,
    createNewsDataWrapper,
    bitcoin,
} from "./helperFuncs.js";

// card factory function
const curacelCard = function() {
    const playIcon = $("<i /> ").attr({ class: "fa-solid fa-expand", id: "play-icon" });
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

    const leftButton = $("<i></i>").attr({ class: "fas fa-chevron-left" });
    const rightButton = $("<i></i>").attr({ class: "fas fa-chevron-right" });

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

    // value for sliding left `${-initial_width * 0.1}%`
    //handle sliding left §

    let initial_width = 0;

    function isInViewPort(card) {
        if (card === undefined) return;
        let card_top = $(card).offset().left;
        let card_bottom = card_top + $(card).outerWidth();
        let viewportTop = $(window).scrollLeft();
        let viewportBottom = viewportTop + $(window).width();
        return card_bottom > viewportTop && card_top < viewportBottom;
    };


    $(".minimize_button").on("mousedown ,scroll resize", function() {
        const card_conotainer = $('div .curacel-inner'),
            card_width = Math.floor($('div .card-content-div').width());

        let card_visible = $('.card-content-div').last();

        if (isInViewPort(card_visible)) {
            $(".minimize_button").css({
                display: "none",
            });
            return;
        }
        initial_width += card_width;
        $(card_conotainer).css({ left: `${-initial_width * 0.2}%` });
        $(".expand_button").css({
            opacity: 1,
            display: "flex",
        });
    });

    // ================================
    $(".expand_button").on("mousedown ,scroll resize", function() {
        const card_conotainer = $('div .curacel-inner'),
            card_width = Math.floor($('div .card-content-div').width());

        let card_visible = $('.card-content-div').first();

        if (isInViewPort(card_visible)) {
            $(".expand_button").css({
                display: "none",
            });
            return;
        }
        initial_width -= card_width;
        $(card_conotainer).css({ left: `${-initial_width * 0.2}%` });

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