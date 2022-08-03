"use strict"
require("../css/styles.css");
require("../css/skins/color-1.css");
require("../css/skins/color-2.css");
require("../css/skins/color-3.css");
require("../css/skins/color-4.css");
require("../css/skins/color-5.css");

require("../css/style-switcher.css");
require("../css/caroucel.css");
require("../css/spinner.css");

// import images
require("../images/businessCard.png");
require("../images/meeee.jpg");
require("../images/need_4_speed.png");
require("../images/new_logoo2.png");
require("../images/project_2.jpg");
require("../images/project_3.jpg");

// typing animation.
let typed = new Typed(".typing", {
    strings: ["", "javaScript-jQuery-reactJs",
        "bash",
        "api dev - Nodejs",
        "etl-elt development",
        "data lake modeling",
        "mongo & mySQL",
        "AWS",
        "Docker",
        "HTML, CSS, Sass",
        "Python-pyCharm"
    ],
    typeSpeed: 110,
    BackSpeed: 60,
    loop: true
});