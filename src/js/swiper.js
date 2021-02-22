import Swiper, { Pagination } from 'swiper';
Swiper.use(Pagination);

const swiperParams = {
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
    }
}

let sectionInit = false;
let sectionSwiper = null;

let screenWidth = window.matchMedia("(max-width: 767px)");

const swiperDestroy = () => {
    sectionInit && sectionSwiper.forEach((item) => item.destroy(true, true))
    sectionSwiper = false;
};

const mySwiper = () => {
    screenWidth.matches ? swiperInit() : swiperDestroy()
};

const swiperInit = () => {
    if (!sectionInit) sectionSwiper = new Swiper('.swiper-container', swiperParams)
};



screenWidth.addListener(mySwiper);

mySwiper();
