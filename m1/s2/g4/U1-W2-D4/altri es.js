let arrName = ['Giulio', 'Fabio', 'Gabriele', 'Anna', 'Giorgia', 'Marco', 'Matteo'];
arrName.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
})
console.log(arrName);

let arrNumbers = [256, 1, 0, 2, 5, 10, 100];
console.log(arrNumbers);
arrNumbers.sort((a, b) => {
    return a < b ? -1 : 1;
    return 0;
})
console.log(arrNumbers);
arrNumbers.reverse();
console.log(arrNumbers.reverse().slice(3, 5));

const str = 'Ciao come stai';
console.log(str.indexOf('Ciao'), str.lastIndexOf('come', str.length - 8), str.indexOf('mamma'), str.search('come'));
const substr = str.slice(5, 9);
console.log(substr);

function capitalizeStr(str) {
    let arrStr = str.split(' ');
    for (let i = 0; i < arrStr.length; i++) {
        arrStr[i] = arrStr[i].charAt(0).toUpperCase() + arrStr[i].slice(1);
    }
    return arrStr.join(' ');
}
console.log(capitalizeStr(str).substring(5, 9));

let arrNumbers2 = [219, 810, 1, 0, -1, -123, -234];
arrNumbers2.sort((a, b) => {
    return a < b ? -1 : 1;
    return 0;
})
console.log(arrNumbers2);
arrNumbers3 = [];
arrNumbers3.length = 100;
for (i = 0; i < arrNumbers3.length; i++) {
    arrNumbers3[i] = randomNumber(-1000, 1000);
}
arrNumbers3.sort((a, b) => {
    return a < b ? -1 : 1;
    return 0;
})
console.log(arrNumbers3);

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const stringa = 'Ciao Motociclisti, benvenuti al raduno stunt bike per giovani motociclisti';
const stringa1 = stringa.replace('motociclisti', 'biker');
const stringa2 = stringa.replace(/motociclisti/i, 'Biker');
const stringa3 = stringa.toLocaleLowerCase().replaceAll('motociclisti', 'biker')

console.log(stringa, stringa1, stringa2, stringa3);

console.log(arrName.map(name => name.charAt(0).toLowerCase() + name.slice(1)).filter(name => name.charAt(0) === 'g'));

let h1 = document.getElementById('data');

function generaDataEOraItaliane(format) { // 'DD/MM/YYYY, ore hh:mm' oppure 'DD mese YYYY, ore hh:mm'
    let laMiaData = new Date();
    let month = laMiaData.getMonth();
    let mese = '';
    let dateTime = '';
    switch (month) {
        case 0: mese = 'gennaio';
            break;
        case 1: mese = 'febbraio';
            break;
        case 2: mese = 'marzo';
            break;
        case 3: mese = 'aprile';
            break;
        case 4: mese = 'maggio';
            break;
        case 5: mese = 'giugno';
            break;
        case 6: mese = 'luglio';
            break;
        case 7: mese = 'agosto';
            break;
        case 8: mese = 'settembre';
            break;
        case 9: mese = 'ottobre';
            break;
        case 10: mese = 'novembre';
            break;
        case 11: mese = 'dicembre';
            break;
    }
    switch (format) {
        case 'DD/MM/YYYY, ore hh:mm':
            dateTime += laMiaData.getDate() + '/' + String(laMiaData.getMonth() + 1) + '/' + laMiaData.getFullYear() + ', ore ' + laMiaData.getHours() + ':' + laMiaData.getMinutes();
            break;
        case 'DD mese YYYY, ore hh:mm':
            dateTime += laMiaData.getDate() + ' ' + mese + ' ' + laMiaData.getFullYear() + ', ore ' + laMiaData.getHours() + ':' + laMiaData.getMinutes();
            break;
        default:
            dateTime += 'Errore nella data';
    }
    return dateTime;
}

console.log(generaDataEOraItaliane('DD mese YYYY, ore hh:mm'))

h1.innerText = generaDataEOraItaliane('DD mese YYYY, ore hh:mm');