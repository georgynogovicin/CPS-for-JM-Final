let arctileExpandBtn = document.getElementById('article-expander');
let articleWrapper = document.getElementById('article-wrapper');

let brandsExpandBtn = document.getElementById('brands-expand-btn');
let brandsWrapper = document.getElementById('brands-wrapper');

let equipmentExpandBtn = document.getElementById('equipment-expand-btn');
let equipmentWrapper = document.getElementById('equipment-wrapper');

arctileExpandBtn.addEventListener('click', function() {
    if (arctileExpandBtn.textContent === 'Свернуть') {
        arctileExpandBtn.textContent = 'Читать далее'
    } else {
        arctileExpandBtn.textContent = 'Свернуть'
    };
    arctileExpandBtn.classList.toggle('btn-read-more--active');
    articleWrapper.classList.toggle('article__wrapper--expanded');
});