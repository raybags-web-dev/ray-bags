"use strict";
import {
    move_to_top_of_page,
    go_to_top,
    openMenu,
    closeMenu,
    closeMenuWithLink,
    copyRightYear,
} from "./middleware.js";
import { init_anime, animateName, click_btn } from "./animations.js";

const allLinks = document.querySelectorAll("a");
const topButton = document.getElementById("myBtn");
const image_with_name_to_animate = document.querySelector(".about-img");
const name_container = document.querySelector(".name-animation");
const project_in_mind_image = document.querySelector(".proj_in_mind");
const project_in_mind_container = document.querySelector(
    "#proj_in_mind_mainpage"
);
const copyright_container = document.querySelector(".copyrightYear");

const spinnerIcon = document.querySelector("#spinner");
const nav_container = document.querySelector(".nav");
const menu_bugger_icon = document.getElementById("menu_open_icon");
const close_menu_icon = document.getElementById("menu_close_icon");
const all_links = document.querySelectorAll(".nav_link");

export {
    allLinks,
    topButton,
    image_with_name_to_animate,
    name_container,
    nav_container,
    menu_bugger_icon,
    close_menu_icon,
};

menu_bugger_icon.addEventListener("click", openMenu, false);
// close menu handler
close_menu_icon.addEventListener("click", closeMenu, false);
// close menu by clicking any link.
all_links.forEach((link) => {
    link.addEventListener("click", closeMenuWithLink, false);
});

// spinner show on load
$(window).on("load", () => {
    $(spinnerIcon).fadeOut("slow");
    console.log("All resources loaded successfully");
});
// still needs work. Making the image element scale when in view port
click_btn(project_in_mind_container, project_in_mind_image);
// role-in name in about section handler
animateName();

// initialize animation from oas
init_anime();
// top button handler.
move_to_top_of_page();
go_to_top();
// update copyright year handler
copyRightYear(copyright_container);

// scroll spy======================needs work============================
function scrollSpy() {
    let sections = $("section");
    let current;

    sections.each(function() {
        let elementId = $(this).attr("id");

        if ($(elementId).offset().top <= $(window).scrollTop()) {
            current = elementId;
        }
    });

    // for (let i = 0; i < sections.length; i++) {

    // }

    $(".nav_list a[href='#" + current + "']").addClass("stick");
    $(".nav_list a")
        .not("a[href='#" + current + "']")
        .removeClass("stick");
}

// smooth scrolling navigation
$(".nav_list a").click(function() {
    let target = $(this).attr("href");
    $("body, html").animate({
            scrollTop: $(target).offset().top,
        },
        300
    );
    return false;
});

//scrollSpy call
$(document).ready(function() {
    scrollSpy();
});

$(window).scroll(function() {
    scrollSpy();
});