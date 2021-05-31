const basketBtns = document.querySelectorAll('.product__add_btn');

basketBtns.forEach((elem) => {
    elem.addEventListener('click',(event) => {
        event.preventDefault();

        // let restartScore = function(elem) {
        //     let text = elem.querySelector('.product__add_txt');
        //     let num = text.querySelector('.product__add_number');

        //     text.textContent = "В корзину";
        //     num.remove();
        // }

        let startScore = function(elem) {
            let text = elem.querySelector('.product__add_txt');
            let number = elem.querySelector('.product__add_number');
            
            if (number == null) {
                text.textContent = '';
                text.insertAdjacentHTML('afterBegin', '<span class="product__add_number">1</span> шт. в корзине');
            } else {
                let sum = Number(number.textContent);
                
                sum++
                number.textContent = sum;
            }
        }

        startScore(elem);
    })

})