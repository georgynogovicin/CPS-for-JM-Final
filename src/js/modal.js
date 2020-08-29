let openMenuBtn = document.querySelector('.ui-button--burger');
let closeMenuBtn = document.querySelector('.ui-button--close');
let openModalCallBtn = document.querySelectorAll('.ui-button--call');
let modalCall = document.getElementById('modal-call');
let menu = document.querySelector('.menu');
let container = document.querySelector('.container');

const openMenu = () => {
    menu.classList.add('menu--active');
    container.classList.add('container--active');
    closeByESCSwitcher();
    closeMenuOutOfModalSwither();
};

const closeByESCSwitcher = () => {
    window.addEventListener('keydown', closeMenuByESC);
};

const closeMenuOutOfModalSwither = () => {
    window.addEventListener('click', closeMenuOutOfModal);
}

const closeMenu = () => {
    menu.classList.remove('menu--active');
    container.classList.remove('container--active');
};

const closeModalCall = () => {
    modalCall.classList.remove('modal--active');
    container.classList.remove('container--active');
}

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
}

const openModaCallSwither = (arr) => {
    for (i = 0; i < arr.length; i++) {
        arr[i].addEventListener('click', function() {
            modalCall.classList.add('modal--active');
            container.classList.add('container--active');
            closeByESCSwitcher();
            closeMenuOutOfModalSwither();
        })
    }
}
openMenuBtn.addEventListener('click', openMenu);
openModaCallSwither(openModalCallBtn);



