$(document).ready(function () {
    $(window).on('scroll', function () {
        const headerH = $('.header__top').outerHeight();
        if ($(this).scrollTop() > headerH) {
            $('.header__top').addClass('color--change');
        } else {
            $('.header__top').removeClass('color--change');
        }
    });

    $(window).on('scroll', function () {
        const headerH = $('.header__title').outerHeight();
        if ($(this).scrollTop() > headerH) {
            $('.pagetop__btn').fadeIn().css('display', 'flex');
        } else {
            $('.pagetop__btn').fadeOut();
        }
    });

    $('.pagetop__btn').on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;

    });

    $(function () {
        $('#js-hamburger-menu').on('click', function () {
            $('.hamburger-menu__bar').toggleClass('active')
            $('.js-nav').toggleClass('show');
        });
    });
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    effect: 'fade',

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.fa-solid fa-chevron-right',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 5000,
    }
});