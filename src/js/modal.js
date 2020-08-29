let openMenuBtn = document.querySelector('.ui-button--burger');
let closeBtn = document.querySelector('.ui-button--close');

let menu = document.querySelector('.menu');
let container = document.querySelector('.container');

const openMenuByClick = (event) => {
    event.preventDefault();
    openMenu();
}

const openMenu = () => {
    menu.classList.add('menu--active');
    container.classList.add('container--active');
    outOfMenuClickHandler();
    outOfMenuKeyDownHandler();
};

const outOfMenuClickHandler = () => {
    window.addEventListener('click', closeMenuByClick);
}

const outOfMenuKeyDownHandler = () => {
    window.addEventListener('keydown', closeMEnuByESC);
}

const closeMenu = () => {
    menu.classList.remove('menu--active')
    container.classList.remove('container--active');
    openMenuBtn.addEventListener('click', openModalByClick, {once: true})
};

const closeMEnuByESC = (event) => {
    event.preventDefault();
    if (event.keyCode === 27 ) {
        window.removeEventListener('keydown', closeModalByESC);
        closeMenu();
    }
};

const closeMenuByClick = (event) => {
    event.preventDefault();
    if (event.target === container || event.target === openMenuBtn) {
        window.removeEventListener('click', closeMenuByClick);
        closeMenu();
    }
}

openMenuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);