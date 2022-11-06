"use strict"

const menuButton = document.querySelector('.nav-toggler');
const sideMenu = document.querySelector('.aside');
const pageTop = document.querySelector('.main-content');
const BG_IMAGE = document.getElementById('BG_IMAGE');


// toggle sidebar
const handleSideBar = () => sideMenu.classList.toggle('dynamic_sidebar');
// remove sidebar
const removeSideBar = () => sideMenu.classList.remove('dynamic_sidebar');
// toggle menuBTN effect
const TogglemenuBTNeffect = () => menuButton.classList.toggle('menu_effect');
// remove menu effect
const removeMenuEffect = () => menuButton.classList.remove('menu_effect');

// apply active class to menu btn when clicked.
menuButton.addEventListener('click', (e) => {
    TogglemenuBTNeffect()
    handleSideBar();
});

function handle_animation_when_clicked_outside(e) {
    let isClickOutside = menuButton.contains(e.target);
    let targetBtn = menuButton.classList.contains('menu_effect');
    let isSideBarOut = sideMenu.classList.contains('dynamic_sidebar');

    if (!isClickOutside && targetBtn && isSideBarOut) {
        removeMenuEffect();
        removeSideBar();
    }
}

// remove animation on menu btn if click outside menu btn
document.body.addEventListener('click', handle_animation_when_clicked_outside);


// Handle active class switch on scroll.
function scrollActive(all_section_ids, anchor_links_parent_div, active_class_name) {
    if (!all_section_ids || all_section_ids == undefined) return;

    const senctions = document.querySelectorAll(all_section_ids);
    const scrollY = window.pageYOffset;
    senctions.forEach(current => {
        const senctionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const senctionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + senctionHeight) {
            document.querySelector(`${anchor_links_parent_div} a[href*=` + senctionId + ']').classList.add(active_class_name);
        } else {
            document.querySelector(`${anchor_links_parent_div} a[href*=` + senctionId + ']').classList.remove(active_class_name);

        }
    })
}

window.addEventListener("scroll", () => scrollActive("section[id]", ".nav", "active"));