let moreBtns = document.querySelectorAll('.product__more_btn');

let showText = function(item) {
    let parent = item.closest('.product__content');
    let text = parent.querySelector('.product__text');
    
    text.classList.add('show');
}

moreBtns.forEach((elem) => {
    elem.addEventListener('click', (event) => {
        event.preventDefault();
        showText(elem)
        elem.classList.add('hidden');
    })
})