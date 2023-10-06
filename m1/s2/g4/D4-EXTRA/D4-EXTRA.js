// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

const randomArr = giveMeRandom(100);

console.log(`la somma di tutti i numeri randomici superiori a 5 è ${checkArray(randomArr)}`);

function checkArray(arr) {
    let amount = 0;
    arr.forEach(n => {
        if (n > 5) {
            console.log(`${n} è maggiore di 5`);
            amount += n;
        } else {
            console.log(`${n} non è maggiore di 5`);
        }
    })
    return amount;
}


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

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/


function shoppingCartTotal(shoppingCartItem) {
    let total = 0;
    for (let i = 0; i < shoppingCartItem.length; i++) {
        total += shoppingCartItem[i].price * shoppingCartItem[i].quantity;
    }
    return total;
}

let shoppingCart = [];

const names = ['Moment', 'MomentAct', 'Buscofen', 'BuscofenAct', 'Fenistil', 'Cerulisina', 'Brufen analgesico', 'Rinazina', 'Actifed giorno e notte', 'Magnesio supremo', 'Cebion', 'Donna Life', 'Codex', 'Debrox', 'Isomar'];
let id = generateId(15);


function ShoppingCart(price, name, id, quantity) {
    this.price = price;
    this.name = name;
    this.id = id;
    this.quantity = quantity;
}

for (let i = 0; i < 15; i++) {
    shoppingCart.push(new ShoppingCart());
    shoppingCart[i].price = randomNumber(5, 500);
    shoppingCart[i].name = names[i];
    shoppingCart[i].id = id[i];
    shoppingCart[i].quantity = randomNumber(0, 10);
}
console.log(shoppingCart);
function generateId(n) {
    let id = [];
    let idStr = '';
    for (let i = 0; i < n; i++) {
        for (j = 0; j < 9; j++) {
            idStr += String(randomNumber(0, 9));
        }
        id.push(idStr);
        idStr = '';
    }
    console.log(id);
    return id;
}

console.log(`Il totale è ${shoppingCartTotal(shoppingCart)}`)


/* EXTRA 3
Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

let newItem = new ShoppingCart();

function addToShoppingCart(newShoppingCartItem) {
    shoppingCart.push(newShoppingCartItem);
    return shoppingCart.length;
}

console.log(`Aggiunto un nuovo elemento a shoppingCart`, shoppingCart, `ora contiene ${addToShoppingCart(newItem)} elementi`)
shoppingCart.pop();
/* EXTRA 4
Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

function maxShoppingCart(shC) {
    let prices = [];
    shC.forEach(shoppingCartItem => prices.push(shoppingCartItem.price));
    let a = Math.max(...prices);
    let b = {};
    for (let i = 0; i < 15; i++) {
        if (a === prices[i]) Object.assign(b, shC[i]); 
    }
    return b;
    
}
console.log('Il più costoso:', maxShoppingCart(shoppingCart));


/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

function latestShoppingCart(shC) {
    return shC[shC.length - 1];
}
console.log('Ultimo elemento', latestShoppingCart(shoppingCart));


/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/
//metto maggiore o uguale altrimenti se n = 9 ho un loop infinito
function loopUntil(n) {
    console.log(`Input: ${n}`);
    let countArr = [];
    for (let i = 0; i < 10; i++) {
        countArr.push(0);
    }
    let goOut = false;
    while (goOut === false) {
        let r = randomNumber(0, 9);
        console.log(r);
        if (r >= n) countArr[r]++;
        countArr.forEach(counter => {
            if (counter === 3) {
                goOut = true;
                console.log('Fine del ciclo');
            }
        })
    }
}

loopUntil(randomNumber(0, 9));

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

const arrayMedia = ['Giulio', [[[]]], 1, 356, 'ciao', undefined, null, NaN, 2, '6', 1888];
for (i = 0; i < 100; i++) {
    arrayMedia.push(randomNumber(0, 1000000));
}

console.log(`Media aritmetica = ${average(arrayMedia)}`);

function average(arr) {
    newArr = arr.filter(element => typeof element === 'number' && !isNaN(element));
    let average = 0;
    newArr.forEach(number => average += number / newArr.length);
    return average;
}

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

let arrayDiStringhe = ['Ciao come va', 'Buona strada', 'Precipitevolissimevolmente', 'Solo sesso sicuro', 'Chi più ne ha più ne mettadddddddddddddddddddddddddddddddddd'];
console.log('Determino quale delle seguenti stringhe è più lunga:');
arrayDiStringhe.forEach(stringa => console.log(stringa));
console.log(`STRINGA PIU' LUNGA = ${longest(arrayDiStringhe)}`);
function longest(strArr) {
    let lengthArr = [];
    for (let i = 0; i < strArr.length; i++) {
        lengthArr.push(strArr[i].length);
    }
    const max = Math.max(...lengthArr);
    for (i = 0; i < strArr.length; i++) {
        if (lengthArr[i] === max) return strArr[i] + ' (' + strArr[i].length + ')';
    }
}


/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

console.log(`Antispam. ${antiSpam('Ciao filtro anti StylePropertyMap, SACM')} ${antiSpam('Ciao come va?')}`);

function antiSpam(emailContent) {
    if (emailContent.search('SPAM') >=0 || emailContent.search('SCAM') >= 0) return false;
    return true;
}

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
