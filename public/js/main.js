"use strict";
import {
    move_to_top_of_page,
    go_to_top,
    openMenu,
    closeMenu,
    closeMenuWithLinkClicks,
    copyRightYear,
    cookie_accepted,
    lazyLoadImages,
    applyActiveClassOnCLick,
} from "./middleware.js";
import { animateName, click_btn } from "./animations.js";
import { dragDrop } from "./cards.js";

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

const img_links = document.querySelectorAll("#author-avator");
const draggables = document.querySelectorAll("#card");
const constainers = document.querySelectorAll("#card-list");

const spinnerIcon = document.querySelector("#spinner");
const nav_container = document.querySelector(".nav");
const menu_bugger_icon = document.getElementById("menu_open_icon");
const close_menu_icon = document.getElementById("menu_close_icon");
const all_links = document.querySelectorAll(".nav_link");
const all_images = document.querySelectorAll("img.lazy");

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
    spinnerIcon,
};

// Apply active class on menu link click handler.
applyActiveClassOnCLick();
// close side menu with any  menu click handler
closeMenuWithLinkClicks(all_links);
// lazy load images
lazyLoadImages(all_images);
// handle projects card and dragging
dragDrop(img_links, draggables, constainers);
// accept cookies
cookie_accepted();
// close menu when user clicks anywhere on the page
document.addEventListener("click", closeMenu, true);
// close menu when logo button is clicked.
logo_btn.addEventListener("click", closeMenu, true);
// open menu when bugger menu icon is clicked
menu_bugger_icon.addEventListener("click", openMenu, false);
// close menu handler
close_menu_icon.addEventListener("click", closeMenu, false);
// still needs work. Making the image element scale when in view port
click_btn(project_in_mind_container, project_in_mind_image);
// role-in name in about section handler
animateName();
// top button handler.
move_to_top_of_page();
go_to_top();
// update copyright year handler
copyRightYear(copyright_container);
// //scrollSpy function