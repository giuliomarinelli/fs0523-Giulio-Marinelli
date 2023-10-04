const starWarsCharacters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 277,
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male"
  },
  {
    name: "C-3PO",
    height: 167,
    mass: 75,
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a"
  },
  {
    name: "R2-D2",
    height: 96,
    mass: 32,
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a"
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male"
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female"
  },
  {
    name: "Owen Lars",
    height: 178,
    mass: 120,
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male"
  },
  {
    name: "Beru Whitesun lars",
    height: 165,
    mass: 75,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female"
  },
  {
    name: "R5-D4",
    height: 97,
    mass: 32,
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a"
  },
  {
    name: "Biggs Darklighter",
    height: 183,
    mass: 84,
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male"
  },
  {
    name: "Obi-Wan Kenobi",
    height: 182,
    mass: 77,
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male"
  }
];

/* ESERCIZIO 1
  Crea una variabile chiamata "characters" e assegnale un array vuoto
*/

let characters = [];

/* ESERCIZIO 2
  Utilizzando un ciclo for, cicla l'array "starWarsCharacters".
  Dovrai accedere alla proprietà "name" di ogni oggetto in esso contenuto, e inserirla nell'array "characters" creato precedentemente.
  Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/

for (let i = 0; i < starWarsCharacters.length; i++) {
  characters.push(starWarsCharacters[i].name);
}

console.log('ESERCIZIO 2: ', characters);

/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un nuovo array chiamato "femaleCharacters" e inserisci al suo interno tutti gli oggetti femminili.
*/

let femaleCharacters = [];
for (i = 0; i < starWarsCharacters.length; i++) {
  if (starWarsCharacters[i].gender === 'female') {
    femaleCharacters.push(starWarsCharacters[i]);
  }
}

console.log('ESERCIZIO 3: ', femaleCharacters);

/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia le seguenti proprietà: blue, yellow, brown, red, blue-gray.
  Ad ognuna di queste proprietà assegna come valore un array vuoto.
*/

let eyeColor = {
  blue: [],
  yellow: [],
  brown: [],
  red: [],
}

eyeColor['blue-gray'] = []; // square bracket notation

console.log('ESERCIZIO 4. Oggetto di array vuoti per raggruppare i personaggi in base al colore degli occhi:', eyeColor);

/* ESERCIZIO 5
  Utilizza uno switch statement per inserire uno ad uno gli oggetti dei personaggi di "starWarsCharacters" negli array relativi al colore degli occhi precedentemente creati.
  Ogni personaggio dovrà finire nell'array corrispondente al suo colore degli occhi (al valore della sua proprietà "eye_color").
*/

for (i = 0; i < starWarsCharacters.length; i++) {
  switch (starWarsCharacters[i].eye_color) {
    case 'blue':
      eyeColor.blue.push(starWarsCharacters[i]);
      break;
    case 'yellow':
      eyeColor.yellow.push(starWarsCharacters[i]);
      break;
    case 'brown':
      eyeColor.brown.push(starWarsCharacters[i]);
      break;
    case 'red':
      eyeColor.red.push(starWarsCharacters[i]);
      break;
    case 'blue-gray':
      eyeColor['blue-gray'].push(starWarsCharacters[i]);
      break;
  }
}

console.log('ESERCIZIO 5. raggruppamento dei personaggi in base al colore degli occhi: ', eyeColor);


/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio. Salvala in una variabile chiamata "crewMass".
*/
let crewMass = 0;
i = 0;
while (i < starWarsCharacters.length) {
  crewMass += starWarsCharacters[i].mass;
  i++;
}

console.log('ESERCIZIO 6. Massa totale dell\'equipaggio:', crewMass);


/* ESERCIZIO 7
  Crea uno if/else statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'ipotetica astronave contenente i personaggi dell'array "starWarsCharacters".

  Se la massa è inferiore a 500 stampa in console: "Ship is under loaded"
  Se la massa è superiore a 500 stampa in console: "Ship is half loaded"
  Se la massa è superiore a 700 stampa in console: "Warning: Load is over 700"
  Se la massa è superiore a 900 stampa in console: "Critical Load: Over 900"
  Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: escape from ship now!"

  Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/

function massControlMessage() {
  let text;
  if (crewMass < 500) {
    text = 'Ship is under loaded';
  } else if (crewMass > 500 && crewMass <= 700) {
    text = 'Ship is half loaded';
  } else if (crewMass > 700 && crewMass <= 900) {
    text = 'Warning: Load is over 700';
  } else if (crewMass > 900 && crewMass <= 1000) {
    text = 'Critical Load: Over 900';
  } else if (crewMass > 1000) {
    text = 'DANGER! OVERLOAD ALERT: escape from ship now!';
  }
  return text;
}

console.log('ESERCIZIO 7.', massControlMessage());

// mettiamo a dieta tutti i personaggi

for (i = 0; i < starWarsCharacters.length; i++) {
  starWarsCharacters[i].mass *= 0.9;
}

// Ricalcoliamo la crewMass (questa volta creo una funzione)

function totalMass() {
  let j = 0;
  let mass = 0;
  while (j < starWarsCharacters.length) {
    mass += starWarsCharacters[j].mass;
    j++;
  }
  return mass;
}

crewMass = totalMass();
i = 0;

console.log('ESERCIZIO 7. Massa totale dopo dieta: ' + crewMass, massControlMessage());

// Facciamo una dieta ferrea

for (i = 0; i < starWarsCharacters.length; i++) {
  starWarsCharacters[i].mass *= 0.65;
}

crewMass = totalMass();
i = 0;

console.log('ESERCIZIO 7. Massa totale dopo dieta ferrea: ' + crewMass, massControlMessage());

/* ESERCIZIO 8
  Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi effettuare la riassegnazione del valore corrispondente o creare un nuovo array)
*/

console.log('ESERCIZIO 8. starWarsCharacters... cambierò il genere n/a con robot', starWarsCharacters);

let newStarWarsCharacters = [];
for (i = 0; i < starWarsCharacters.length; i++) {
  newStarWarsCharacters.push(starWarsCharacters[i]);
  if (newStarWarsCharacters[i].gender === 'n/a') {
    newStarWarsCharacters[i].gender = 'robot';
  }
}

console.log('ESERCIZIO 8. newStarWarsCharacters... genere cambiato', starWarsCharacters);

/* --EXTRA-- ESERCIZIO 9
  Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "characters" le stringhe corrispondenti a personaggi con lo stesso nome.
  Una volta fatto crea un console.log per controllare la proprietà length di "characters" prima e dopo l'operazione.
*/

console.log('ESERCIZIO 9. Rimuovo i personaggi identici a femaleCharacters contenuti dentro a characters senza usare metodi degli array. Questo è l\'array characters prima:', characters, `length = ${characters.length}`);

for (i = 0; i < femaleCharacters.length; i++) {
  for (let j = 0; j < starWarsCharacters.length; j++) {
    if (femaleCharacters[i] === starWarsCharacters[j]) {
      characters.splice(j, 1);
    }
  }
}

console.log('ESERCIZIO 9. L\'array characters una volta eliminati i personaggi corrispondenti identici in femaleCharacters', characters, `length = ${characters.length}`);

/* --EXTRA-- ESERCIZIO 10
  Crea una funzionalità che selezioni un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo (a tuo piacimento).
*/
