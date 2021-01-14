"use strict";
import { prevent_default, move_to_top_of_page, go_to_top } from './middleware.js';
import { init_anime, animated_pulse } from './animations.js';

const allLinks = document.querySelectorAll('a');
const topButton = document.getElementById('myBtn');
const all_skills = document.querySelectorAll('.skill');
const about_img = document.querySelector('.about-picture');

animated_pulse(about_img)

// initialize animation from oas
init_anime()
    // prevent default behaviour from all links
prevent_default();
// top button handler.
move_to_top_of_page();
go_to_top();




export { allLinks, topButton };