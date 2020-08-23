import Swiper, { Pagination } from 'swiper';
Swiper.use(Pagination);


// const breakpoint = window.matchMedia("(min-width:768px)");

// let mySwiper;

// const breakpointChecker = () => {
//     if (breakpoint.matches === true) {
//         if (mySwiper !== undefined) {
//             mySwiper.destroy(true, true);
//         } else {
//             return;
//         }
//     } else if (breakpoint.matches === false) {
//         return enableSwiper();
//     }
// };

// const enableSwiper = function () {
//     mySwiper = new Swiper('.swiper-container', {
//         direction: 'horizontal',
//         loop: false,
//         spaceBetween: 16,
//         slidesPerView: 'auto',
//         mousewheel: true,
//         slidesOffsetBefore: 16,
//         slidesOffsetAfter: 16,
//         grabCursor: true,
      
        
//         pagination: {
//           el: '.swiper-pagination',
//           type: 'bullets',
//           clickable: true,
//           speed: 200,
//         },
//       });
// };

// breakpoint.addListener(breakpointChecker);

// breakpointChecker();


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
