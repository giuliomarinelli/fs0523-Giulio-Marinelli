class Tabellone {
    constructor(selector, title, n, tabellina) {
        this.selector = String(selector);
        this.title = String(title);
        this.n = Number(n);
        this.tabellina = tabellina;
        this.target = document.querySelector(this.selector);
        this.played = [];
        this.elements = [];
    }
    randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    extract() {
        let number;
        while (true) {
            if (!this.tabellina) {
                number = this.randomNumber(1, this.n);
            } else {
                number = this.randomNumber(1, 76);
            }
            if (!this.played.includes(number)) break;
        }
        this.played.push(number);
        const viewedNumbers = this.target.querySelectorAll(`${this.selector} .number p`);
        viewedNumbers.forEach(n => {
            if (number === Number(n.innerText)) {
                n.parentElement.classList.add('extracted');
            }
        })
        return number;
    }
    init() {
        if (this.target) {
            const div1 = document.createElement('div');
            div1.classList.add('header');
            div1.innerHTML = `<p>${this.title}</p>`;
            const div2 = document.createElement('div');
            div2.classList.add('numbers-grid');
            for (let i = 1; i <= this.n; i++) {
                const divI = document.createElement('div');
                divI.classList.add('number');
                const number = this.randomNumber(1, 76);
                divI.innerHTML = this.tabellina ? `<p>${number}` : `<p>${i}</p>`;
                div2.append(divI);
                this.elements.push(divI);
            }
            if (this.tabellina) {
                const newTarget = document.createElement('div');
                newTarget.classList.add('tabellina');
                newTarget.append(div1, div2);
                this.target.append(newTarget);
            } else {
                this.target.append(div1, div2);
            }
            this.target.append(div1, div2);
        } else {
            console.error(`L'istanza ${this.title} di Tabellone non riesce a trovare un selettore per agganciarsi. ${this.selector} non è un selettore valido!`)
        }

    }
}




const tabellone = new Tabellone('#tabellone', 'Tabellone', 76, false);
tabellone.init();
const selectors = ['#add-tabellina', '#start', '#extract'];
const elements = [];
selectors.forEach(e => elements.push(document.querySelector(e)));
const [addTabellina, start, extract] = elements;
const tabelline = [];
let i = 0;
addTabellina.addEventListener('click', () => {
    i++;
    const tabellina = new Tabellone('#tabelline', `Tabellina ${i}`, 24, true);
    tabellina.init();
    tabelline.push(tabellina);
})
start.addEventListener('click', () => {
    addTabellina.setAttribute('disabled', 'disabled');
    extract.removeAttribute('disabled');
})
extract.addEventListener('click', () => {
    tabellone.extract();
    for (let i = 0; i < tabelline.length; i++) {
        tabelline[i].extract();
    }
})