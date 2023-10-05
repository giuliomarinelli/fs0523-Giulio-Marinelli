/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1, l2) {
    return l1 * l2;
}

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(a, b) {
    if (a === b) return 3 * (a + b);
    if (a !== b) return a + b;
}

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(n) {
    if (n > 19) return 3 * (n - 19);
    if (n <= 19) return n - 19;
}

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
    if ((n >= 20 && n <= 100) || n === 400) return true;
}

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
console.log(epify('ciao'), epify('EPICODE ciao a tutti'));
function epify(str) {
    if (str.search('EPICODE') === -1) return 'EPICODE ' + str;
    if (str.search('EPICODE') === 0) return str;
}
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
console.log(check3and7(-10), check3and7(21), check3and7(9));
function check3and7(n) {
    if (n <= 0) return;
    if (n > 0 && n % 3 === 0 && n % 7 === 0) {
        return true;
    } else {
        return false;
    }
}

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
console.log(reverseString('Giulio Marinelli'))
function reverseString(str) {
    let revertedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        revertedStr += str.charAt(i);
    }
    return revertedStr;
}

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
console.log(upperFirst('   ciao questa è una stringa   formata  da più parole  separate da tanti spazi,  a volte gli spazi   sono troppi.   '))
function upperFirst(str) {
    let arrStr = str.replace(/\s+/g, ' ').trim().split(' ');
    for (let i = 0; i < arrStr.length; i++) {
        arrStr[i] = arrStr[i].charAt(0).toUpperCase() + arrStr[i].slice(1);
    }
    let capitalizedStr = arrStr.join(' ');
    return capitalizedStr;
}

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
console.log(cutString('Questa è una stringa'))
function cutString(str) {
    let arrStr = str.split('');
    arrStr.pop();
    arrStr.shift();
    let newString = arrStr.join('');
    return newString;
}

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
console.log(giveMeRandom(50));
function giveMeRandom(n) {
    let arrRandom = [];
    for (let i = 0; i < n; i++) {
        arrRandom.push(randomNumber(0, 10));
    }
    return arrRandom;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}