AOS.init({
    duration: 800,
    easing: 'slide',
    once: true,
});

(function ($) {
    'use strict';

    /**------------- Show Menu ------------**/
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    /**------------ Remove Menu -----------**/
    const navLink = document.querySelectorAll('.nav_link');

    function linkAction() {
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove('show-menu');
    }
    navLink.forEach((n) => n.addEventListener('click', linkAction));

    /**------------ Change Header -----------**/

    function scrollHeader() {
        const header = document.getElementById('header');
        if (this.scrollY >= 80) header.classList.add('scroll-header');
        else header.classList.remove('scroll-header');
    }
    window.addEventListener('scroll', scrollHeader);

    /**------------ Home Slider -----------**/
    var homeCarousel = function () {
        if ($('.slide-item-one').length > 0) {
            $('.slide-item-one').owlCarousel({
                items: 1,
                loop: true,
                stagePadding: 0,
                margin: 0,
                autoplay: true,
                animateOut: 'slideOutDown',
                animateIn: 'fadeIn',
                pauseOnHover: false,
                nav: true,
                navText: [
                    '<span class="ri-arrow-right-line">',
                    '<span class="ri-arrow-left-line">',
                ],
            });
        }
    };
    homeCarousel();

    /**------------ Testimonial Slider -----------**/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /**------------ Review Slider -----------**/
    var reviewData = $('.review-data');
    var reviewText = $('.review-info');

    reviewText.on('changed.owl.carousel', function (event) {
        reviewData.trigger('next.owl.carousel');
    });

    reviewData.owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 3,
        center: true,
        margin: 20,
        autoplay: true,
        mouseDrag: false,
    });

    reviewText.owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        items: 1,
        margin: 20,
        autoplay: true,
        navText: [
            '<i class="ri-arrow-left-line"><i>',
            '<i class="ri-arrow-right-line"><i>',
        ],
        animateOut: 'fadeOutDown',
        animateIn: 'fadeInDown',
    });

    /**------------ Scroll Sections -----------**/
    const sections = document.querySelectorAll('section[id]');

    function scrollActive() {
        const scrollY = window.pageYOffset;

        sections.forEach((current) => {
            const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document
                    .querySelector('.nav-menu a[href*=' + sectionId + ']')
                    .classList.add('active-link');
            } else {
                document
                    .querySelector('.nav-menu a[href*=' + sectionId + ']')
                    .classList.remove('active-link');
            }
        });
    }
    window.addEventListener('scroll', scrollActive);

    /**------------ ScrollUp -----------**/
    function scrollUp() {
        const scrollUp = document.getElementById('scroll-up');
        if (this.scrollY >= 400) scrollUp.classList.add('show-scroll');
        else scrollUp.classList.remove('show-scroll');
    }
    window.addEventListener('scroll', scrollUp);
})(jQuery);
