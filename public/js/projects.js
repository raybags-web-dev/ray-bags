"use strict";

$(document).ready(function() {
    let log = console.log;
    log('jquery loaded successfully');
    $('.inner-dropdown').removeClass('hide')


    // open menu handler
    function openMenu() {
        $(this).addClass('hide')
        $('.inner-dropdown ').css({ 'bottom': '0%' })
        $('.fa-times').removeClass('hide').css({
            'position': 'fixed'
        });

        $('.inner-dropdown a').each((indx, ele) => {
            $(ele).addClass('fadeInLinks')
        })
    }

    // close menu hanbdler
    function closeMenu() {
        $(this).addClass('hide');
        $('.inner-dropdown ').css({ 'bottom': '100%' })
        $('.fa-bars').removeClass('hide');
        $('.inner-dropdown a').each((indx, ele) => {
            $(ele).removeClass('fadeInLinks')
        })
    }

    // close menu on any link click

    $('.inner-dropdown a').each((indx, ele) => {
        $(ele).on('click', (e) => {
            $('.inner-dropdown ').css({ 'bottom': '100%' })
            $('.fa-bars').removeClass('hide');
            $('.fa-times').addClass('hide');
            // e.preventDefault();
        })
    });

    // closeMenu by ckicking on body handler

    $('.fa-bars').on('click', openMenu);
    $('.fa-times').on('click', closeMenu);

    // toggle details text for project 

    $('.fa-question-circle').on('click', function() {
        $('.text-container').slideToggle();
    })

})