const header = document.querySelector('#header');
const blackPill = document.querySelector('#header .pill-black');
let upAlready = true;
let downAlready = false;
changeAlready = false;
let position = 'up';

document.addEventListener('scroll', () => {
    if (window.scrollY < 250 && !upAlready) {
        position = 'up';
        upAlready = true;
        downAlready = false;
        changeAlready = false;
    }
    if (window.scrollY > 400 && !downAlready) {
        position = 'down';
        downAlready = true;
        upAlready = false;
        changeAlready = false;
    }
    if (window.scrollY <= 400 && window.scrollY >= 250 && !changeAlready) {
        changeAlready = true;
        upAlready = false;
        downAlready = false;
        if (position === 'up') {
            if (header.classList.contains('scrolled-up-header') && blackPill.classList.contains('scrolled-up-pill')) {
                header.classList.add('scrolled-down-header')
                blackPill.classList.add('scrolled-down-pill')
            }
            if (header.classList.contains('bg-yellow')) header.classList.remove('bg-yellow')
            setTimeout(() => {
                header.classList.remove('scrolled-up-header')
                blackPill.classList.remove('scrolled-up-pill')
            }, 150)
        }
        if (position === 'down') {
            header.classList.add('scrolled-up-header')
            blackPill.classList.add('scrolled-up-pill')
            setTimeout(() => {
                header.classList.remove('scrolled-down-header')
                blackPill.classList.remove('scrolled-down-pill')
            }, 150)
        }
    }

})
const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const M = document.getElementById('M');
const MComeAndGo = [];
for (let i = 1; i <= 14; i++) {
    for (let j = 1; j <= 25; j++) {
        let div = document.createElement('div');
        div.style.height = '20px';
        div.style.flexBasis = '4.5%';
        div.id = `div-c-${j}-r-${i}`;
        const num = generateRandomNumber(1, 10);
        if (i >= 1 && i <= 6) {
            if (num > 8) div.innerText = 'M';
        }
        else if (i >= 7 && i <= 10) {
            if (num > 6) div.innerText = 'M';
        } else {
            if (num >= 4) div.innerText = 'M';
        }
        M.append(div);
    }
}

for (i = 0; i < 100; i++) {
    MComeAndGo.push({
        c: generateRandomNumber(1, 25),
        r: generateRandomNumber(1, 14)
    })
}
i = 0;
j = MComeAndGo.length - 1;
setInterval(() => {
    if (i < MComeAndGo.length) {
        document.querySelector(`#div-c-${MComeAndGo[i].c}-r-${MComeAndGo[i].r}`).textContent = 'M';
        console.log(`#div-c-${MComeAndGo[i].c}-r-${MComeAndGo[i].r}`)
        i++;

    }
    if (i === MComeAndGo.length) {
        document.querySelector(`#div-c-${MComeAndGo[j].c}-r-${MComeAndGo[j].r}`).textContent = '';
        j--;
        if (j === 0) {
           document.querySelector(`#div-c-${MComeAndGo[j].c}-r-${MComeAndGo[j].r}`).textContent = '';
            j = MComeAndGo.length - 1;
            i = 0;
        }
    }
}, 60)


