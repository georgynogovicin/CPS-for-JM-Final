import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);


let sectionSwiper = null;
let screenWidth = window.matchMedia("(max-width: 767px)");

const serviesSwiperInit = function() {
    if (!sectionSwiper) {
        sectionSwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: false,
            spaceBetween: 16,
            slidesPerView: 'auto',
            mousewheel: true,
            slidesOffsetBefore: 16,
            slidesOffsetAfter: 16,
            grabCursor: true,
          
            
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true,
              speed: 200,
            },
          
           
          })
    }
};

const sectionSwiperDestroy = function() {
    if (sectionSwiper) {
        sectionSwiper.destroy();
        sectionSwiper = null;
    }
};

let mySwiper = function() {
    if (screenWidth.matches === true) {
        serviesSwiperInit()
    } else {
        sectionSwiperDestroy()
    }
};

screenWidth.addListener(mySwiper);

mySwiper();
