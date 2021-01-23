"use strict";
import {
    move_to_top_of_page,
    go_to_top,
    openMenu,
    closeMenu,
    closeMenuWithLink,
    copyRightYear,
    cookie_accepted,
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
const cookie_accept_bunner = document.querySelector(".alert_box_accepted");
const cookie_btn = document.getElementById("cookie_btnn");
const cookie_accept_bunner_icon = document.getElementById("close");

const copyright_container = document.querySelector(".copyrightYear");
const logo_btn = document.getElementById("logo_containers");

// const img_links = document.querySelectorAll(".author-avator");
// const draggables = document.querySelectorAll(".card");
// const constainers = document.querySelectorAll(".card-list");

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
    cookie_accept_bunner,
    cookie_btn,
    cookie_accept_bunner_icon,
    logo_btn,
    // img_links,
    // draggables,
    // constainers,
};

cookie_accepted();
// close menu when user clicks anywhere on the page
document.addEventListener("click", closeMenu, true);
// close menu when logo button is clicked.
logo_btn.addEventListener("click", closeMenu, true);
// open menu when bugger menu icon is clicked
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