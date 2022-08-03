import { mainCarocelContainer } from "./utils.js";

function JQUERY() {

    document.addEventListener('DOMContentLoaded', function() {

        $('#spinner-container').addClass('hidden');

        // initial func calls
        showHideTopBtn();
        handleNavANimation();

        // create caroucel container
        mainCarocelContainer(),

            // show top btn
            setTimeout(() => {
                $("#myBtn").removeClass("hide");
            }, 1000);

        // hide show top button on scroll
        function showHideTopBtn() {
            if ($(window).scrollTop() > 400) {
                // scrolling to bottom
                $("#myBtn").css({ right: "0%", transition: "800ms" });
            } else {
                // top of the page
                $("#myBtn").css({ right: "-20%", transition: "800ms" });
            }
        };

        // dynamic animation class for theme switcher
        $('.style-switcher-toggler').on('click', () => {
                if (!$('.style-switcher').hasClass('open')) {
                    return $('.anch').removeClass('clr-animate');
                }
                $('.anch').each((index, ele) => {
                    $(ele).delay(80 * index).queue(function() {
                        $(this).addClass("clr-animate").dequeue();
                    })
                })
            })
            // toggle image logo and logo display on scroll handler
        function handleNavANimation() {
            if ($(window).scrollTop() > 901) {
                $(".nav-image").addClass('slideInNavImg');
                $("#nav-logo").addClass('slideInNavText');
            } else {
                $(".nav-image").removeClass('slideInNavImg');
                $("#nav-logo").removeClass('slideInNavText');
            }
        };



        // functions running on window load
        $(window).on("scroll", () => {
            showHideTopBtn();
            handleNavANimation();
        });
    })
}
export { JQUERY }