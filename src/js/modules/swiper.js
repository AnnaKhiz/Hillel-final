export function callSwiperAbout() {
    var mySwiperAbout = new Swiper(".mySwiperAbout", {
        slidesPerView: 4,
        spaceBetween: 15,
        loop: true,
        autoplay: true,
        pagination: {
            el: ".swiper-pagination-about",
            clickable: true,
        },

    });
}

export function callSwiperIndex() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 40,
        autoHeight: false,
        //autoplay: true,
        lazy: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        // breakpoints: {
        //     200: {
        //         slidesPerView: 1,
        //         spaceBetween: 40,
        //     },
        //     375: {
        //         slidesPerView: 1,
        //         spaceBetween: 40,
        //     },
        //     600: {
        //         slidesPerView: 1,
        //         spaceBetween: 40,
        //     },
        //     768: {
        //         slidesPerView: 1,
        //         spaceBetween: 40,
        //     },
        //     1920: {
        //         slidesPerView: 1,
        //         spaceBetween: 40,
        //     },
        // },
    });
}
