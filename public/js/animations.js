/* === configs ===
distance: '150%'
origin: 'bottom'
opacity: 0
delay: 100
reset: true
*/


// animate all buttons
animateHandler('.btn', { distance: '100%', origin: 'bottom', opacity: 0, reset: true, delay: 100 });
//animate main image
animateHandler('.home-img', { distance: '300%', origin: 'right', reset: true, opacity: 0, delay: 300 });
// animate sub hello text
animateHandler('.hello', { distance: '100%', origin: 'bottom', reset: true, opacity: 0, delay: 150 });
//animate professional intro text
animateHandler('.my-profession', { distance: '100%', origin: 'bottom', reset: true, opacity: 0, delay: 200 });
//animate details text
animateHandler('.home-info p', { distance: '100%', origin: 'bottom', opacity: 0, reset: true, delay: 250 });
// animate all h2 subheadings
animateHandler('.section-title h2', { distance: '100%', origin: 'bottom', reset: true, opacity: 0, delay: 150 });
// animate sub heading h2
animateHandler('.about-text h3', { distance: '100%', origin: 'bottom', reset: true, opacity: 0, delay: 150 });
//animate subheading h3
animateHandler('.about-text p', { distance: '100%', origin: 'bottom', reset: true, opacity: 0, delay: 150 });
// animate info items
animateHandler('.info-item p', { distance: '100%', origin: 'bottom', opacity: 0, reset: true, delay: 150 });
//animate skills
animateHandler('.skills-item h5', { distance: '100%', origin: 'right', reset: true, opacity: 0, delay: 150 });
//animate eductation headers
animateHandler('.padd-15 h3', { distance: '100%', origin: 'bottom', reset: true, opacity: 0, delay: 250 });
// animate contact form
animateHandler('.contact-form', { distance: '50%', origin: 'bottom', opacity: 0, delay: 150 })


// animate buttons items
Array.from(document.querySelectorAll('.btn')).forEach((ele, index) => {
    animateHandler(ele, { distance: '100%', origin: 'bottom', reset: true, opacity: 0, delay: 10 * index })
});

// animate education items
Array.from(document.querySelectorAll('.timeline-item h3')).forEach((ele, index) => {
    animateHandler(ele, { distance: '100%', origin: 'left', opacity: 0, delay: 10 * index })
});
Array.from(document.querySelectorAll('.timeline-item h4')).forEach((ele, index) => {
    animateHandler(ele, { distance: '100%', origin: 'top', opacity: 0, delay: 10 * index })
});
Array.from(document.querySelectorAll('.timeline-item p')).forEach((ele, index) => {
    animateHandler(ele, { distance: '100%', origin: 'top', reset: true, opacity: 0, delay: 10 * index })
});
Array.from(document.querySelectorAll('.circle-dot')).forEach((ele, index) => {
    animateHandler(ele, { distance: '100%', origin: 'top', opacity: 0, reset: true, delay: 10 * index })
});
Array.from(document.querySelectorAll('.timeline-date')).forEach((ele, index) => {
    animateHandler(ele, { distance: '100%', origin: 'top', opacity: 0, reset: true, delay: 10 * index })
});


// animate portfolio items 
Array.from(document.querySelectorAll('.portfolio-item')).forEach((ele, index) => {
    animateHandler(ele, { distance: '120%', origin: 'bottom', opacity: 0, delay: 100 * index })
});

// animate contact info items
Array.from(document.querySelectorAll('.contact-info-item')).forEach((ele, index) => {
    animateHandler(ele, { distance: '100%', origin: 'bottom', opacity: 0, reset: true, delay: 100 * index })
});
// animate progress items 
Array.from(document.querySelectorAll('.progress')).forEach((ele, index) => {
    animateHandler(ele, { distance: '150%', origin: 'right', opacity: 0, reset: true, delay: 100 * index })
})

// animate vibe items items vibe-item 
Array.from(document.querySelectorAll('.vibe-item')).forEach((ele, index) => {
    animateHandler(ele, { distance: '50%', origin: 'bottom', opacity: 0, delay: 100 * index })
});
Array.from(document.querySelectorAll('.vibe-item-inner p')).forEach((ele, index) => {
    animateHandler(ele, { distance: '50%', origin: 'bottom', reset: true, opacity: 0, delay: 100 * index })
});
Array.from(document.querySelectorAll('.vibe-item-inner h4')).forEach((ele, index) => {
    animateHandler(ele, { distance: '50%', origin: 'bottom', reset: true, opacity: 0, delay: 100 * index })
});
// animate services items
Array.from(document.querySelectorAll('.service-item')).forEach((ele, index) => {
    animateHandler(ele, { distance: '100%', origin: 'bottom', opacity: 0, delay: 100 * index })
});
Array.from(document.querySelectorAll('.service-item-inner h4')).forEach((ele, index) => {
    animateHandler(ele, { distance: '50%', origin: 'bottom', reset: true, opacity: 0, delay: 100 * index })
});
Array.from(document.querySelectorAll('.service-item-inner p')).forEach((ele, index) => {
    animateHandler(ele, { distance: '50%', origin: 'bottom', reset: true, opacity: 0, delay: 100 * index })
});


// form group form-item
Array.from(document.querySelectorAll('.row .form-item')).forEach((ele, index) => {
    animateHandler(ele, { distance: '50%', origin: 'bottom', reset: true, opacity: 0, delay: 100 * index })
});

function animateHandler(element, configs = {}) {
    return ScrollReveal().reveal(element, configs);
}