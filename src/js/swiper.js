import Swiper, { Pagination } from 'swiper';
Swiper.use(Pagination);



let sectionSwiper = false;

let screenWidth = window.matchMedia("(max-width: 767px)");

const swiperDestroy = function() {
    if (sectionSwiper) {
        for (let i = 0; i < sectionSwiper.length; i++) {
            sectionSwiper[i].destroy(true, true);
        }   
    }
    sectionSwiper = false;
};

const mySwiper = function() {
    if (screenWidth.matches === true) {
        swiperInit()
    } else {
        swiperDestroy()
    }
};

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



screenWidth.addListener(mySwiper);

mySwiper();
