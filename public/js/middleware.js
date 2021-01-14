import { allLinks, topButton } from './main.js';


const prevent_default = () => {
    allLinks.forEach(a => {
        a.addEventListener('click', (target) => {
            target.preventDefault();
        });
    });
}

const show_hide_top_button = (element) => {
    element = topButton;
    let window_height = document.body.scrollTop;
    let screen_height = document.documentElement.scrollTop;
    if (window_height > 400 || screen_height > 400) {
        element.classList.add('fadeInRight');
        element.classList.remove('fadeOut');
        element.classList.remove('hide')

    } else {
        element.classList.remove('fadeInRight');
        element.classList.add('fadeOut');
        element.classList.add('hide')
    }

}

function go_to_top() {
    document.body.addEventListener('scroll', () => {
        show_hide_top_button();
    }, true);
    window.addEventListener('scroll', () => {
        show_hide_top_button();
    })
    document.body.addEventListener('load', () => {
        show_hide_top_button();
    }, true);
    window.addEventListener('load', () => {
        show_hide_top_button();
    })
}

const move_to_top_of_page = () => {
    topButton.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
}

// Detect element in viewPort helper function

const element_isIn_viewPort = (element) => {
    const element_position = element.getBoundingClientRect();
    return (
        element_position.top >= 0 &&
        element_position.left >= 0 &&
        element_position.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        element_position.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

export { prevent_default, move_to_top_of_page, go_to_top, element_isIn_viewPort };