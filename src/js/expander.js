let article = document.querySelector('.article'),
    brands = document.querySelector('.brands'),
    equipment = document.querySelector('.equipment');

article.querySelector('.btn-read-more').addEventListener('click', function() {
    if (this.textContent === 'Свернуть') {
        this.textContent = 'Читать далее';
    } else {
        this.textContent = 'Свернуть';
    }
    this.classList.toggle('btn-read-more--active');
    article.querySelector('.article__wrapper').classList.toggle('article__wrapper--expanded');

});


brands.querySelector('.btn-read-more').addEventListener('click', function() {
    if (this.textContent === 'Свернуть') {
        this.textContent = 'Показать все';
    } else {
        this.textContent = 'Свернуть';
    }
    this.classList.toggle('btn-read-more--active');
    brands.querySelector('.brands__list').classList.toggle('brands__list--expanded');

});

equipment.querySelector('.btn-read-more').addEventListener('click', function() {
    if (this.textContent === 'Свернуть') {
        this.textContent = 'Показать все';
    } else {
        this.textContent = 'Свернуть';
    }
    this.classList.toggle('btn-read-more--active');
    equipment.querySelector('.equipment__list').classList.toggle('equipment__list--expanded');

});









// let articleWrapper = document.querySelector('.article__wrapper');
// let brandsWrapper = document.querySelector('.brands__list');
// let equipmentWrapper = document.querySelector('.equipment__list');
// let expandBtn = document.querySelectorAll('btn-read-more');


// expandBtn.forEach(function(item) {
//     item.addEventListener('click', function() {

//     })
// })


// articleExpandBtn.addEventListener('click', function() {
//     if (arctileExpandBtn.textContent === 'Свернуть') {
//         arctileExpandBtn.textContent = 'Читать далее'
//     } else {
//         arctileExpandBtn.textContent = 'Свернуть'
//     };
//     articleExpandBtn.classList.toggle('btn-read-more--active');
//     articleWrapper.classList.toggle('article__wrapper--expanded');
// });

// brandsExpandBtn.addEventListener('click', function() {
//     if (brandsExpandBtn.textContent === 'Свернуть') {
//         brandsExpandBtn.textContent = 'Показать все'
//     } else {
//         brandsExpandBtn.textContent = 'Свернуть'
//     };
//     brandsExpandBtn.classList.toggle('btn-read-more--active');
//     brandsWrapper.classList.toggle('brands__list--expanded');
// });

// equipmentExpandBtn.addEventListener('click', function() {
//     if (equipmentExpandBtn.textContent === 'Свернуть') {
//         equipmentExpandBtn.textContent = 'Показать все'
//     } else {
//         equipmentExpandBtn.textContent = 'Свернуть'
//     };
//     equipmentExpandBtn.classList.toggle('btn-read-more--active');
//     equipmentWrapper.classList.toggle('equipment__list--expanded');
// });

