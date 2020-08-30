let openMenuBtn = document.querySelector('.ui-button--burger'),
    closeMenuBtn = document.querySelector('.ui-button--close'),
    menu = document.querySelector('.menu'),
    container = document.querySelector('.container');

const openMenu = () => {
    menu.classList.add('menu--active');
    container.classList.add('container--active');
    closeByESCSwitcher();
    closeMenuOutOfModalSwitcher();
};

const closeByESCSwitcher = () => {
    window.addEventListener('keydown', closeMenuByESC);
};

const closeMenuOutOfModalSwitcher = () => {
    window.addEventListener('click', closeMenuOutOfModal);
}

const closeMenu = () => {
    menu.classList.remove('menu--active');
    container.classList.remove('container--active');
};


const closeMenuByESC = (event) => {
    if (event.keyCode === 27) {
        window.removeEventListener('keydown', closeMenuByESC);
        closeMenu();
    }
};

const closeMenuOutOfModal = (event) => {
    if (event.target === container || event.target === closeMenuBtn) {
        window.removeEventListener('click', closeMenuOutOfModal);
        closeMenu();
    }
};



openMenuBtn.addEventListener('click', openMenu);