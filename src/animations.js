"use strict";
import { image_with_name_to_animate, name_container } from "./main.js";
import {} from "./middleware.js";

// animate name in about section handler
const animateName = () => {
    $(window).scroll(function() {
        let top_of_element = $(image_with_name_to_animate).offset().top;
        let bottom_of_element = $(image_with_name_to_animate).offset().top + $(image_with_name_to_animate).outerHeight();
        let bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        let top_of_screen = $(window).scrollTop();

        if (
            bottom_of_screen > top_of_element &&
            top_of_screen < bottom_of_element
        ) {
            $(name_container).removeClass("hide");
            $(name_container).css("display", "flex");
        } else {
            $(name_container).addClass("hide");
            $(name_container).css("display", "none");
        }
    });
};

// animate element in view port
const click_btn = (elementInViewPort, targetElemenet) => {
    $(window).scroll(function() {
        let top_of_element = $(elementInViewPort).offset().top;
        let bottom_of_element = $(elementInViewPort).offset().top + $(elementInViewPort).outerHeight();

        let bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        let top_of_screen = $(window).scrollTop();

        if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element)
            $(targetElemenet).css("transform: scale(1.1)");
    });
};

export { animateName, click_btn };