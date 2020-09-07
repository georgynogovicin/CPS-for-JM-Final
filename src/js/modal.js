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


document.addEventListener('click', function(event) {
    let target = event.target;

    switch (target.getAttribute('data-modal')) {
        case 'call': 
        closeModal(menu, menuActive);
        openModal(target);
        break;

        case 'feedback':
        closeModal(menu, menuActive);
        openModal(target);
        break;

        case 'menu':
        openMenu();
        break;
    }
});

const openModal = (btn) => {
    let targetClass = '.modal--' + btn.getAttribute('data-modal');
    let targetElement = document.querySelector(targetClass);
    
    targetElement.classList.add(modalActive);
    container.classList.add('container--active');
    window.addEventListener('click', closeModalCallByClick);
    window.addEventListener('click', closeFeedbackByLCick);
    window.addEventListener('keydown', closeByEsc);
};

const closeByEsc = (event) => {
    if (event.keyCode === 27) {
        closeModal(menu, menuActive);
        closeModal(modalCall, modalActive);
        closeModal(modalFeedback, modalActive);
    }
};

//Close modal call by click handler
const closeModalCallByClick = (event) => { 
    if (event.target === container || event.target === closeCallBtn) {
        window.removeEventListener('click', closeModalCallByClick);
        closeModal(modalCall, modalActive);
    }
};



//Close modal feedback by click handler
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
    window.addEventListener('keydown', closeByEsc);
    window.addEventListener('click', closeMenuByClick);
};

//Close menu by click listener
const closeMenuByClick = (event) => { 
    if (event.target === container || event.target === closeMenuBtn) {
        window.removeEventListener('click', closeMenuByClick);
        closeModal(menu, menuActive);
    }
};
//Close any modal(bl - block, cl - active class)
const closeModal = (element, cl) => { 
    element.classList.remove(cl);
    container.classList.remove('container--active');
};










 