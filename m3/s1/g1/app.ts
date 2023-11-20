const fs = require('fs')
const generateRandomNumber = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1) + min)
const numbersGame = (a: number, b: number): string => {
    const randomNumber: number = generateRandomNumber(1, 100)
    let str: string = `\nIl primo giocatore ha scelto il numero: ${a}.\nIl secondo giocatore ha scelto il numero: ${b}.\n
    Numero estratto: ${randomNumber}\n\n`
    if (a === randomNumber || b === randomNumber) {
        if (a === randomNumber && b !== randomNumber) {
            str += 'Il primo giocatore ha indovinato il numero!'
        }
        else if (b === randomNumber && a !== randomNumber) {
            str += 'Il secondo giocatore ha indovinato il numero!'
        } else if (a === randomNumber && b === randomNumber) {
            str += 'EVENTO STRAORDINARIO! Entrambi i giocatori hanno indovinato il numero!'
        }
    } else if (a !== randomNumber && b !== randomNumber) {
        str += 'Nessuno dei due giocatori ha indovinato il numero, '
        const diffA = a > randomNumber ? a - randomNumber : randomNumber - a
        const diffB = b > randomNumber ? b - randomNumber : randomNumber - b
        if (diffA < diffB) {
            str += 'ma il primo giocatore è quello che ci è andato più vicino.\n'
        } else if (diffB < diffA) {
            str += 'ma il secondo giocatore è quello che ci è andato più vicino.\n'
        } else if (diffA === diffB) {
            str += 'ed entrambi ci sono andati altrettanto vicini.\n'
        }
    }

    return str + '\n____________________________________________________________________________________________\n'
}
let results: string = 'NUMBERS GAME (per avere una casistica grande, che non sta nella console del terminale)\n____________________________________________________________________________________________\n'
for (let i: number = 0; i < 10000; i++) results += numbersGame(generateRandomNumber(1, 100), generateRandomNumber(1, 100))
fs.writeFileSync('Risultati.txt', results)