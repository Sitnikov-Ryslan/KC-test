const moreBtn = document.querySelector('.categories__open_btn');

let showCategories = function() {
    let categories = document.querySelectorAll('.categories__item');

    categories.forEach((elem) => {
        let hiddenCategories = elem.classList.contains('hidden');
        
        if (hiddenCategories) {
            elem.classList.remove('hidden');
        }
    })

    moreBtn.classList.add('hidden');
    moreBtn.removeEventListener('click', showCategories);
}

moreBtn.addEventListener('click', showCategories);