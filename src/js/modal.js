let openMenuBtn = document.querySelector('.interaction-btn--burger'),
    menu = document.querySelector('.menu'),
    closeMenuBtn = menu.querySelector('.interaction-btn--close'),
    container = document.querySelector('.container'),
    callBtn = document.querySelectorAll('.interaction-btn--call'),
    feedbackBtn = document.querySelectorAll('.interaction-btn--chat'),
    modalCall = document.querySelector('.modal--call'),
    modalFeedback = document.querySelector('.modal--feedback'),
    modalActive = 'modal--active',
    menuActive = 'menu--active',
    closeCallBtn = modalCall.querySelector('.interaction-btn--close'),
    closeFeedbackBtn = modalFeedback.querySelector('.interaction-btn--close');


//Open callback modal
const openModalCall = () => { 
    modalCall.classList.add(modalActive);
    container.classList.add('container--active');
    window.addEventListener('keydown', closeModalCallByESC);
    window.addEventListener('click', closeModalCallByClick);
};
// CLose by ESC keydown listener
const closeModalCallByESC = (event) => { 
    if (event.keyCode === 27) {
        window.removeEventListener('keydown', closeModalCallByESC);
        closeModal(modalCall, modalActive);
    }
};
//Close by click listener
const closeModalCallByClick = (event) => { 
    if (event.target === container || event.target === closeCallBtn) {
        window.removeEventListener('click', closeModalCallByClick);
        closeModal(modalCall, modalActive);
    }
};

//OPen feedback modal
const openModalFeedback = () => { 
    modalFeedback.classList.add(modalActive);
    container.classList.add('container--active');
    window.addEventListener('keydown', closeFeedbackByESC);
    window.addEventListener('click', closeFeedbackByLCick);
};
// CLose by ESC keydown listener
const closeFeedbackByESC = (event) => { 
    if (event.keyCode === 27) {
        window.removeEventListener('keydown', closeFeedbackByESC);
        closeModal(modalFeedback, modalActive);
    }
};
//Close by click listener
const closeFeedbackByLCick = (event) => { 
    if (event.target === container || event.target === closeFeedbackBtn) {
        window.removeEventListener('click', closeFeedbackByLCick);
        closeModal(modalFeedback, modalActive);
    }
};

//Open side-menu
const openMenu = () => {  
    menu.classList.add('menu--active');
    container.classList.add('container--active');
    window.addEventListener('keydown', closeMenuByESC);
    window.addEventListener('click', closeMenuByClick);
};
//Close by ESC keydown listener
const closeMenuByESC = (event) => { 
    if (event.keyCode === 27) {
        window.removeEventListener('keydown', closeMenuByESC);
        closeModal(menu, menuActive);
    }
};
//Close by click listener
const closeMenuByClick = (event) => { 
    if (event.target === container || event.target === closeMenuBtn) {
        window.removeEventListener('click', closeMenuByClick);
        closeModal(menu, menuActive);
    }
};
//Close any modal(bl - block, cl - active class)
const closeModal = (bl, cl) => { 
    bl.classList.remove(cl);
    container.classList.remove('container--active');
};









//Open callback btn listener
callBtn.forEach(function(item) { 
    item.addEventListener('click', function () {
        closeModal(menu, menuActive);
        modalCall.classList.add(modalActive);
        container.classList.add('container--active');
        modalCall.querySelector('input').focus({preventScroll:true});
        window.addEventListener('keydown', closeModalCallByESC);
        window.addEventListener('click', closeModalCallByClick);
        
    })
});
//Open feedback btn listener
feedbackBtn.forEach(function(item) { 
    item.addEventListener('click', function () {
        closeModal(menu, menuActive);
        modalFeedback.classList.add(modalActive);
        container.classList.add('container--active');
        modalFeedback.querySelector('.form__input').focus({preventScroll:true});
        window.addEventListener('keydown', closeFeedbackByESC);
        window.addEventListener('click', closeFeedbackByLCick);
        
    })
});
//OPen side-menu btn listener
openMenuBtn.addEventListener('click', openMenu); 