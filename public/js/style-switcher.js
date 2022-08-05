const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");

styleSwitcherToggler.addEventListener('click', () => {
    document.querySelector(".style-switcher").classList.toggle('open');
});

Array.from(document.querySelectorAll('.colors span'))
    .forEach(span => span.addEventListener('click', () => {
        document.querySelector(".style-switcher").classList.remove('open');
    }))

window.addEventListener('scroll', () => {
    document.querySelector('.aside').classList.remove('dynamic_sidebar');
    document.querySelector('.nav-toggler').classList.remove('menu_effect');

    if (document.querySelector(".style-switcher").classList.contains('open')) {
        document.querySelector(".style-switcher").classList.remove('open');
    }
});

const all_anchors = Array.from(document.querySelectorAll('.anch')).forEach((span, index1) => {
    span.addEventListener('click', (e) => {
        return (e.target.classList.contains('color-1')) ? setActiveStyle('color-1') :
            (e.target.classList.contains('color-2')) ? setActiveStyle('color-2') :
            (e.target.classList.contains('color-3')) ? setActiveStyle('color-3') :
            (e.target.classList.contains('color-4')) ? setActiveStyle('color-4') :
            setActiveStyle('color-5')
    })
})

function setActiveStyle(color) {
    localStorage.setItem('color', color);
    changeColor();
}

const alternateStyle = document.querySelectorAll(".alternate-style");

function changeColor() {
    alternateStyle.forEach(style => {
        if (localStorage.getItem('color') === style.getAttribute('title')) {
            style.removeAttribute('disabled');
        } else {
            style.setAttribute('disabled', 'true');
        }
    })
}

// Color Theme
(() => {
    let currentCorror = localStorage.getItem('color');
    if (currentCorror) {
        // color theme state management
        alternateStyle.forEach(style => {
            if (currentCorror === style.getAttribute('title')) {
                style.removeAttribute('disabled');
            } else {
                style.setAttribute('disabled', 'true');
            }
        })
    }
})()


// theme light and dark
const dayNight = document.querySelector('.day-night');
let bodyWorkBench = document.body.classList;
dayNight.addEventListener('click', () => {
    dayNight.querySelector('i').classList.toggle('fa-sun');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    bodyWorkBench.toggle('dark');
    if (bodyWorkBench.contains('dark')) return localStorage.setItem('dark-theme', 'dark');
    localStorage.removeItem('dark-theme');
});
// save theme bg to local storage
(() => {
    let currentBodyTheme = localStorage.getItem('dark-theme');
    if (currentBodyTheme) bodyWorkBench.toggle('dark');
})();

window.addEventListener('load', () => {
    if (document.body.classList.contains('dark')) {
        dayNight.querySelector('i').classList.add('fa-sun');
    } else {
        dayNight.querySelector('i').classList.add('fa-moon');

    }
});