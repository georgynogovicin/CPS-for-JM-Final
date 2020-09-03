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