import Swiper, { Pagination } from 'swiper';
Swiper.use(Pagination);



let sectionSwiper = null;
let screenWidth = window.matchMedia("(max-width: 767px)");


const swiperInit = function() {
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
            ally: true,
          
            
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true,
              speed: 200,
            },
          
           
          })
    }
};

const swiperDestroy = function() {
    if (sectionSwiper) {
        sectionSwiper.destroy(true, true);
        sectionSwiper = null;
    }
};

const mySwiper = function() {
    if (screenWidth.matches === true) {
        swiperInit()
    } else {
        swiperDestroy()
    }
};

screenWidth.addListener(mySwiper);

mySwiper();
