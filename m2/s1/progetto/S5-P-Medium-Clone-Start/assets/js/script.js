const header = document.querySelector('#header');
const blackPill = document.querySelector('#header .pill-black');

document.addEventListener('scroll', () => {
    if (window.scrollY > 344) {
        if (header.classList.contains('scrolled-up-header') && blackPill.classList.contains('scrolled-up-pill')) {
            header.classList.remove('scrolled-up-header');
            blackPill.classList.remove('scrolled-up-pill');
            header.classList.add('scrolled-down-header');
            blackPill.classList.add('scrolled-down-pill');
        }
    } else if (header.classList.contains('scrolled-down-header') && blackPill.classList.contains('scrolled-down-pill')){
        header.classList.remove('scrolled-down-header');
        blackPill.classList.remove('scrolled-down-pill');
        header.classList.add('scrolled-up-header');
        blackPill.classList.add('scrolled-up-pill');
    }
})
