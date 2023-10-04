/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

//esempi

const numberA = 10;
const numberB = 100;
console.log(`ESERCIZIO 1: Qual è il più grande tra ${numberA} e ${numberB}? ` + theMajorBetween(numberA, numberB));

function theMajorBetween(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return 'I due numeri sono uguali'
  }
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const numberC = 25;
const numberD = 5;
console.log(`ESERCIZIO 2: Is ${numberC} equal to 5? ` + isEqualTo5(numberC));
console.log(`ESERCIZIO 2: Is ${numberD} equal to 5? ` + isEqualTo5(numberD));

function isEqualTo5(n) {
  if (n !== 5) {
    return 'not equal';
  } else {
    return 'equal';
  }
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

console.log(`ESERCIZIO 3. E' ${numberC} divisibile per 5? ` + divisibleBy5(numberC));


function divisibleBy5(n) {
  if (n % 5 === 0) {
    return 'Divisibile per 5';
  }
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
numberE = 8;
numberF = 9;
numberG = 16
console.log(`ESERCIZIO 4. Scrivi un algoritmo per verificare che, dati due numeri interi (${numberE} e ${numberF}), il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8. ` + text(numberE, numberF));
console.log(`ESERCIZIO 4. Scrivi un algoritmo per verificare che, dati due numeri interi (${numberF} e ${numberF}), il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8. ` + text(numberF, numberF));
console.log(`ESERCIZIO 4. Scrivi un algoritmo per verificare che, dati due numeri interi (${numberE} e ${numberG}), il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8. ` + text(numberE, numberG));

function text(a, b) {
  if (compare(a, b)) {
    return 'Sì';
  } else {
    return 'No';
  }
}

function compare(a, b) {
  if (a === 8 || b === 8 || a + b === 8 || a - b === 8 || b - a === 8) {
    return true;
  } else {
    return false;
  }
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

const myShoppingCart = 100;
const myShoppingCart1 = 10;

console.log(`ESERCIZIO 5. Se spendi fino a 50 paghi 10 di spedizione, altrimenti la spedizione è gratuita. Tu hai speso ${myShoppingCart} quindi il tuo totale è ` + eCommerce(myShoppingCart));
console.log(`ESERCIZIO 5. Se spendi fino a 50 paghi 10 di spedizione, altrimenti la spedizione è gratuita. Tu hai speso ${myShoppingCart1} quindi il tuo totale è ` + eCommerce(myShoppingCart1));

function eCommerce(totalShoppingCart) {
  if (totalShoppingCart > 50) {
    return totalShoppingCart
  } else {
    return totalShoppingCart + 10;
  }
}
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
console.log(`ESERCIZIO 6. Se spendi fino a 50 paghi 10 di spedizione, altrimenti la spedizione è gratuita. Tu hai speso ${myShoppingCart} a cui applichiamo il 20% di sconto perché c\'è il black Friday (${myShoppingCart * 0.8}), quindi il tuo totale è ` + eCommerceBlackFriday(myShoppingCart));
console.log(`ESERCIZIO 6. Se spendi fino a 50 paghi 10 di spedizione, altrimenti la spedizione è gratuita. Tu hai speso ${myShoppingCart1} a cui applichiamo il 20% di sconto perché c\'è il black Friday (${myShoppingCart1 * 0.8}), quindi il tuo totale è ` + eCommerceBlackFriday(myShoppingCart1));


function eCommerceBlackFriday(totalShoppingCart) {
  totalShoppingCart *= 0.8; //sconto del 20%
  if (totalShoppingCart > 50) {
    return totalShoppingCart
  } else {
    return totalShoppingCart + 10;
  }
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

const number1 = 12;
const number2 = 3567;
const number3 = 1;
console.log('ESERCIZIO 7' + `. I tre numeri ${number1}, ${number2} e ${number3} in ordine decrescente: ` + descendingOrder(number1, number2, number3));

function descendingOrder(a, b, c) {
  let small, medium, large;
  if (a > b && a > c) {
    large = a;
  } else if (b > a && b > c) {
    large = b;
  } else {
    large = c;
  }
  if (a < b && a < c) {
    small = a;
  } else if
    (b < a && b < c) {
    small = b;
  } else {
    small = c;
  }
  if (includedIntoInterval(a, b, c)) {
    medium = c;
  } else if (includedIntoInterval(a, c, b)) {
    medium = b;
  } else if (includedIntoInterval(b, c, a)) {
    medium = a;
  }
  return large + ' > ' + medium + ' > ' + small;
}

function includedIntoInterval(a, b, n) {  // deve cadere nell'intervallo
  if ((n > a && n < b) || (n < a && n > b)) {
    return true;
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

const number4 = 'non sono un numero';
const number5 = 1;
console.log(`ESERCIZIO 8. ${number4} è un numero? ` + text2(number4));
console.log(`ESERCIZIO 8. ${number5} è un numero? ` + text2(number5));

function isANumber(n) {
  if (!(isNaN(n))) {
    return true;
  }
}
function text2(n) {
  if (isANumber(n)) {
    return 'E\' un numero';
  } else {
    {
      return 'Non è un numero';
    }
  }
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
console.log(`ESERCIZIO 9. ${number1} è un numero pari o dispari? ` + text3(number1));
console.log(`ESERCIZIO 9. ${number2} è un numero pari o dispari? ` + text3(number2));

function isDivisibleBy2(n) { // divisibile per 2 significa pari, altrimenti è dispari
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
function text3(n) {
  if (isDivisibleBy2(n)) {
    return 'E\' un numero pari'
  } else {
    return 'E\' un numero dispari'
  }
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza. */
console.log('ESERCIZIO 10.')
let val = 7;
if (val < 10) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else if (val >= 10) {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto';

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

numbersArray = [];
numbersArray.length = 10;
for (let i = 0; i < numbersArray.length; i++) {
  numbersArray[i] = i + 1;
}


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

numbersArray.pop();
numbersArray.push(100);

console.log(numbersArray);