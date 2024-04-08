const fonts = Array.from(document.querySelectorAll('.font-size'));

const book = document.querySelector('.book__content');
fonts.forEach( font => {
    font.addEventListener('click', event => {
        for(let i = 0; i < fonts.length; i++) {
            fonts[i].classList.remove('font-size_active');
        };

        font.classList.add('font-size_active');
        event.preventDefault();

        if(font.closest('.font-size_active')) {
            book.classList.remove('font-size_small');
            book.classList.remove('font-size_big');
        };
        if(font.dataset.size === 'big'){
            book.classList.add('font-size_big');
            book.classList.remove('font-size_small');
        };
        if(font.dataset.size === 'small'){
            book.classList.add('font-size_small');
            book.classList.remove('font-size_big');
        };
   })
})