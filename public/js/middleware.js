"use strict";

import {
    topButton,
    nav_container,
    menu_bugger_icon,
    close_menu_icon,
    logo_btn,
    cookie_accept_bunner,
    cookie_accept_bunner_icon,
} from "./main.js";
// top button visibility handler.
const show_hide_top_button = (element) => {
    element = topButton;
    let window_height = document.body.scrollTop;
    let screen_height = document.documentElement.scrollTop;
    if (window_height > 400 || screen_height > 400) {
        element.classList.add("fadeInRight");
        element.classList.remove("fadeOut");
        element.classList.remove("hide");
    } else {
        element.classList.remove("fadeInRight");
        element.classList.add("fadeOut");
        element.classList.add("hide");
    }
};

// back to top handler
function go_to_top() {
    document.body.addEventListener(
        "scroll",
        () => {
            show_hide_top_button();
        },
        true
    );
    window.addEventListener("scroll", () => {
        show_hide_top_button();
    });
    document.body.addEventListener(
        "load",
        () => {
            show_hide_top_button();
        },
        true
    );
    window.addEventListener("load", () => {
        show_hide_top_button();
    });
}

const move_to_top_of_page = () => {
    topButton.addEventListener("click", () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
    logo_btn.addEventListener("click", () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
};

// Detect element in viewPort helper function
const element_isIn_viewPort = (element) => {
    const element_position = element.getBoundingClientRect();
    return (
        element_position.top >= 0 &&
        element_position.left >= 0 &&
        element_position.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        element_position.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
};

// Open menu handler
const openMenu = function(e) {
    e.preventDefault();

    close_menu_icon.classList.remove("hide");
    menu_bugger_icon.classList.add("hide");

    nav_container.style.left = "0";
    nav_container.style.transition = ".8s";
};

// close menu handler
const closeMenu = function() {
    menu_bugger_icon.classList.remove("hide");
    close_menu_icon.classList.add("hide");

    nav_container.style.left = "-100%";
    nav_container.style.transition = ".8s";
};
// remove menu by clicking any link handler.
const closeMenuWithLink = function() {
    menu_bugger_icon.classList.remove("hide");
    close_menu_icon.classList.add("hide");

    nav_container.style.left = "-100%";
    nav_container.style.transition = ".8s";
};

// coppyright year handler

const copyRightYear = function(element) {
    const current_year = new Date().getFullYear();
    element.textContent = current_year;
};

// cookie banner and cookie accepted banner handler.
function cookie_accepted() {
    window.addEventListener("cookieAlertAccept", function() {
        console.log("cookies accepted");

        $(cookie_accept_bunner).addClass("slideInDown");
        $(cookie_accept_bunner).removeClass("hide");
        $(document).ready(function() {
            $(cookie_accept_bunner_icon).click(function() {
                $(cookie_accept_bunner).slideUp();
                $(cookie_accept_bunner).removeClass("slideInDown");
                setTimeout(() => $(cookie_accept_bunner).addClass("hide"), 1000);
            });
        });
    });
}

export {
    move_to_top_of_page,
    go_to_top,
    openMenu,
    closeMenu,
    closeMenuWithLink,
    copyRightYear,
    cookie_accepted,
    element_isIn_viewPort,
};