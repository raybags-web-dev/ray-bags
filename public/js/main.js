"use strict";
import { move_to_top_of_page, go_to_top } from './middleware.js';
import { init_anime, animateName, click_btn } from './animations.js';

const allLinks = document.querySelectorAll('a');
const topButton = document.getElementById('myBtn');
const image_with_name_to_animate = document.querySelector('.about-img');
const name_container = document.querySelector('.name-animation');
const project_in_mind_image = document.querySelector('.proj_in_mind');
const project_in_mind_container = document.querySelector('#proj_in_mind_mainpage');


// still needs work. Making the image element scale when in view port
click_btn(project_in_mind_container, project_in_mind_image);
// role-in name in about section handler
animateName();

// initialize animation from oas
init_anime()
    // top button handler.
move_to_top_of_page();
go_to_top();





export { allLinks, topButton, image_with_name_to_animate, name_container };