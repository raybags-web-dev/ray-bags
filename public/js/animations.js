import {} from './main.js'
import { element_isIn_viewPort } from './middleware.js';

const init_anime = () => AOS.init();

function animated_pulse(...elements) {
    if (!elements) return console.error('this resource needs an input');

    elements.forEach(element => {
        if (element_isIn_viewPort(element)) {
            element.classList.add('animated');
            element.classList.add('slideInUp');

            element.classList.remove('slideOutDown');

        }
        element.classList.add('slideOutDown');
        element.classList.remove('slideInUp');

    });
}
export { init_anime, animated_pulse };