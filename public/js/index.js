"use strict"

const menuButton = document.querySelector('.nav-toggler');
const sideMenu = document.querySelector('.aside');
const date = document.querySelector("#current_date");

// ========= coppyright year ==========handler
(() => date.textContent = new Date().getFullYear())();
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

// remove animation on menu btn if click outside menu btn
document.body.addEventListener('click', function(e) {
    let isClickOutside = menuButton.contains(e.target);
    let targetBtn = menuButton.classList.contains('menu_effect');
    let isSideBarOut = sideMenu.classList.contains('dynamic_sidebar');

    if (!isClickOutside && targetBtn && isSideBarOut) {
        removeMenuEffect();
        removeSideBar();
    }

});