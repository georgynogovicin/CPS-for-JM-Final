let articleBtnInner = 'Читать далее',
    sectionBtnInner = 'Показать все',
    expandedBtnInner = 'Свернуть';

document.addEventListener('click', function (event) {
    let target = event.target;

    switch (target.getAttribute('data-expander')) {
        case 'article':
        expander(target);
        innerChanger(target, articleBtnInner);
        break;

        case 'brands':
        expander(target);
        innerChanger(target, sectionBtnInner);
        break;

        case 'equipment':
        expander(target);
        innerChanger(target, sectionBtnInner);
        break;
    }
});

const expander = (btn) => {
    let targetClass = '.' + btn.getAttribute('data-expander') + '__list',
        targetActiveClass = targetClass.substring(1) + '--expanded';
    
    document.querySelector(targetClass).classList.toggle(targetActiveClass);
    btn.classList.toggle('btn-read-more--active');
};

const innerChanger = (btn, inner) => {
    if (btn.textContent === inner) {
        btn.textContent = expandedBtnInner;
    } else {
        btn.textContent = inner;
    }
};
