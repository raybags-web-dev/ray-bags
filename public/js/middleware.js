"use strict";

import {
    topButton,
    nav_container,
    menu_bugger_icon,
    close_menu_icon,
} from "./main.js";

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
    console.log("menu open");
};

// close menu handler
const closeMenu = function(e) {
    e.preventDefault();

    menu_bugger_icon.classList.remove("hide");
    close_menu_icon.classList.add("hide");

    nav_container.style.left = "-100%";
    nav_container.style.transition = ".8s";

    console.log("menu closed");
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

export {
    move_to_top_of_page,
    go_to_top,
    openMenu,
    closeMenu,
    closeMenuWithLink,
    copyRightYear,
};