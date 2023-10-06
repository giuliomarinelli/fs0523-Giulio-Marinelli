/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish'];

console.log('ESERCIZIO 1.');
pets.forEach((pet, index) => console.log(`Elemento con indice ${index}: ${pet}`));

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

console.log('ESERCIZIO 2.');
const newPets = pets.sort(); // modifica l'array e al contempo lo restituisce modificato quindi revPets e pets saranno uguali
console.log('Array pets in ordine alfabetico:', pets, newPets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log('ESERCIZIO 3.');
console.log(pets.reverse());

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione
*/

console.log('ESERCIZIO 4.');
firstPet = pets.shift();
console.log(firstPet);
console.log(pets);
pets.push(firstPet);
console.log('Il primo elemento è diventato l\'ultimo:', pets);
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
console.log('ESERCIZIO 5.');

let generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

function generateCharacterFromNumber(n) {
  switch (n) {
    case 1: return 'A' // il break è superfluo perché il return fa terminare la funzione
    case 2: return 'B'
    case 3: return 'C'
    case 4: return 'D'
    case 5: return 'E'
    case 6: return 'F'
    case 7: return 'G'
    case 8: return 'H'
    case 9: return 'I'
    case 10: return 'J'
    case 11: return 'K'
    case 12: return 'L'
    case 13: return 'M'
    case 14: return 'N'
    case 15: return 'O'
    case 16: return 'P'
    case 17: return 'Q'
    case 18: return 'R'
    case 19: return 'S'
    case 20: return 'T'
    case 21: return 'U'
    case 22: return 'V'
    case 23: return 'W'
    case 24: return 'X'
    case 25: return 'Y'
    case 26: return 'Z'
    default: return 'A'
  }
}

function generateRandomLicensePlate() {
  let licensePlate = ['A', 'A', 1, 1, 1, 'Z', 'Z'];
  for (let i = 0; i < licensePlate.length; i++) {
    if (typeof licensePlate[i] === 'string') licensePlate[i] = generateCharacterFromNumber(generateRandomNumber(1, 26));
    if (typeof licensePlate[i] === 'number') licensePlate[i] = generateRandomNumber(0, 9);
  }
  return licensePlate.join('');
}

cars.forEach(obj => obj.licensePlate = generateRandomLicensePlate());

console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log('ESERCIZIO 6');
newCar = {
  brand: 'BMW',
  model: '320d',
  color: 'red',
  trims: ['allure', 'GT'],
  licensePlate: generateRandomLicensePlate()
}
cars.push(newCar);
cars.forEach(car => car.trims.pop());
console.log('Cars: ', cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log('ESERCIZIO 7');
const justTrims = []
cars.forEach(car => justTrims.push(car.trims[0]));
console.log('justTrims: ', justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

console.log('ESERCIZIO 8');
cars.forEach(car => {
  if (car.color.charAt(0) === 'b') {
    console.log('Fizz');
  } else {
    console.log('Buzz');
  }
})

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
console.log('ESERCIZIO 9.');
let i = 0;
while (true) {
    console.log(numericArray[i]);
    if (numericArray[i] === 32) break;
    i++; 
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd'];

const numbersArray = [];
for (i = 0; i < charactersArray.length; i++) {
  numbersArray.push(generateNumberFromCharacter(charactersArray[i]));
}
console.log('Da', charactersArray, 'a', numbersArray);

function generateNumberFromCharacter(character) {
  switch (character) {
    case 'a': return 1
    case 'b': return 2
    case 'c': return 3
    case 'd': return 4
    case 'e': return 5
    case 'f': return 6
    case 'g': return 7
    case 'h': return 8
    case 'i': return 9
    case 'j': return 10
    case 'k': return 11
    case 'l': return 12
    case 'm': return 13
    case 'n': return 14
    case 'o': return 15
    case 'p': return 16
    case 'q': return 17
    case 'r': return 18
    case 's': return 19
    case 't': return 20
    case 'u': return 21
    case 'v': return 22
    case 'w': return 23
    case 'x': return 24
    case 'y': return 25
    case 'z': return 26
  }
}
