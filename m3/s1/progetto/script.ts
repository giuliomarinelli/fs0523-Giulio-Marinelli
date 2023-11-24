interface Sim {
    carica: number
    numeroChiamate: number
    costoMinuto: number
    ricarica(euro: number): void
    numero404(): string
    getNumeroChiamate(): number
    chiamata(min: number): void
    azzeraChiamate(): void
}

type Chiamata = {
    id: number
    durata: number
    dataOra: Date
    minuti: number
    secondi: number
}

class Smartphone implements Sim {
    public costoMinuto = 0.20
    public numeroChiamate = 0
    public carica = 0
    // una SIM può essere venduta con credito 0 oppure con un credito di base già presente
    constructor(caricaBase?: number) {
        if (caricaBase) this.carica = caricaBase
    }
    public ricarica(euro: number): void {
        //if (euro <= 0) throw new Error('Non puoi ricaricare con un importo negativo o nullo')
        /*Lascio questa parte commentata perché un'eventuale gestione dell'errore
       genererebbe problematiche di tipizzazione e di base l'errore è totalmente bloccante, ma è un meccanismo
       elementare di validazione del dato in input quindi lo menziono */
        if (euro > 0) this.carica += euro
    }/*Lascio una validazione implicita. Meccanismo non bloccante ma l'utente può non capire le ragioni 
        per cui il metodo non esegue l'operazione richiesta. Ovviamente decommentando l'if alla riga 21, 
        il secondo if sparisce perché non ha senso, dato che throw new Error blocca l'esecuzione del programma */
    public numero404(): string {
        return `${this.carica.toFixed(2)}€`
    }
    public getNumeroChiamate(): number {
        return this.numeroChiamate
    }
    public chiamata(min: number): void {
        //if (min * this.costoMinuto > this.carica) throw new Error('Credito insufficiente!')
        /*Lascio questa parte commentata perché un'eventuale gestione dell'errore
        genererebbe problematiche di tipizzazione e di base l'errore è totalmente bloccante, ma è un meccanismo
        elementare di validazione del dato in input quindi lo menziono */
        if (min * this.costoMinuto <= this.carica) {
            this.numeroChiamate++
            this.carica -= min * this.costoMinuto
            const now: Date = new Date()
            const minuti: number = now.getMinutes()
            const secondi: number = now.getSeconds()
            now.setSeconds(0)
            now.setMinutes(0)
            this.registroChiamate.push({
                id: this.registroChiamate.length + 1,
                durata: min,
                dataOra: now,
                minuti: minuti,
                secondi: secondi
            })
        }
    } /*Lascio una validazione implicita. Meccanismo non bloccante ma l'utente può non capire le ragioni 
        per cui il metodo non esegue l'operazione richiesta. Ovviamente decommentando l'if alla riga 36, 
        il secondo if sparisce perché non ha senso, dato che throw new Error blocca l'esecuzione del programma */

    public azzeraChiamate(): void {
        this.numeroChiamate = 0
    }

    private registroChiamate: Chiamata[] = []

    /* 
        Di base, la gestione del registro chiamate prevede la generazione di una data nell'istante esatto in cui viene
        invocato il metodo chiamata(). Questo può rivelarsi efficace se visto dalla prospettiva di una classe,
        tuttavia il metodo chiamata() viene invocato sempre in un ambiente privo di eventi, mentre dovrebbe essere
        sempre invocato in risposta ad un determinato evento di cui il programma dovrebbe restare in ascolto.
        In questo caso il codice viene compilato fondamentalmente nello stesso istante, pertanto effettuare test
        basati sulla realtà richiederebbe di utilizzare un evento fittizio utilizzando ad esempio setTimeout() e/o
        setInterval() nel corso di alcune ore di tempo per far effettuare alla classe chiamate in momenti diversi.
        Inoltre, i dati sono volatili, ogni volta che si ricarica la pagina (nel caso in cui ci sia un file HTML collegato)
        vengono persi. Una soluzione semplice potrebbe essere quella di lavorare ad eventi e fare lavoro di lettura/scrittura
        in localStorage, ma sicuramente la soluzione migliore sarebbe quella di avere alle spalle un back-end che
        lavora con un database.
        Fatte queste considerazioni, invento un metodo che se invocato sovrascrive il "naturale" registro chiamate e ne
        crea uno fittizio, con l'unico scopo di poter testare i metodi mostraRegistroChiamate() e
        filtraChiamatePerDataOra ()
    */

    private generateRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    public generaRegistroChiamateFittizio(n: number): void {
        this.registroChiamate = []
        this.azzeraChiamate()
        for (let i: number = 0; i < n; i++) {
            const date: Date = new Date()
            date.setFullYear(2023)
            date.setMonth(10)
            date.setDate(this.generateRandomNumber(10, 11))
            date.setHours(this.generateRandomNumber(0, 23), 0, 0, 0)
            const minuti: number = this.generateRandomNumber(0, 59)
            const secondi: number = this.generateRandomNumber(0, 59)
            this.registroChiamate.push({
                id: this.registroChiamate.length + 1,
                durata: this.generateRandomNumber(1, 100),
                dataOra: date,
                minuti: minuti,
                secondi: secondi
            })
        }
    }
    public mostraRegistroChiamate(arrayFiltrato?: Chiamata[]): string {
        let registro: string = ''
        let arr!: Chiamata[]
        if (arrayFiltrato) {
            arr = arrayFiltrato
        } else {
            arr = this.registroChiamate
        }
        arr.forEach((el: Chiamata) => {
            el.dataOra.setMinutes(el.minuti)
            el.dataOra.setSeconds(el.secondi)
            registro += `id chiamata: ${el.id} | Durata: ${el.durata} minuti | `
            registro += `Data e ora: ${el.dataOra.toLocaleTimeString('it-IT', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
            })}.\n\n`
            el.dataOra.setMinutes(0)
            el.dataOra.setSeconds(0)
        })
        return registro
    }
    //dataStringa => utilizzo il formato GG/MM/AAAA. Ora: number = [0, 23]
    public filtraRegistroChiamate(dataStringa: string, ora: number): string {
        let registro: string = ''
        const dataStringaArr = dataStringa.split('/')
        const dataFiltro: Date = new Date(
            Number(dataStringaArr[2]),
            Number(dataStringaArr[1]) - 1,
            Number(dataStringaArr[0]),
            ora)
        const timeStampFiltro: number = dataFiltro.getTime()
        const registroChiamateFiltrato: Chiamata[] = this.registroChiamate.filter((el: Chiamata) => el.dataOra.getTime() === timeStampFiltro)
        return this.mostraRegistroChiamate(registroChiamateFiltrato)
    }

}

const iPhone5: Smartphone = new Smartphone(10)
iPhone5.chiamata(1)
console.log(iPhone5)
iPhone5.chiamata(10)
console.log(`iPhone 5. Numero chiamate: ${iPhone5.getNumeroChiamate()}.\nCredito residuo ${iPhone5.numero404()}`)
//iPhone5.ricarica(-10)
//iPhone5.chiamata(10000)
iPhone5.azzeraChiamate()
console.log(iPhone5.getNumeroChiamate())
const iPhone8 = new Smartphone()
console.log(`iPhone 8. Credito residuo: ${iPhone8.numero404()}`)
iPhone8.ricarica(5)
for (let i = 1; i <= 10; i++) {
    iPhone8.chiamata(i % 2)
}
console.log(`iPhone 8. numero chiamate: ${iPhone8.getNumeroChiamate()}\nCredito residuo ${iPhone8.numero404()}`)
iPhone8.ricarica(6)
iPhone8.azzeraChiamate()
console.log(`iPhone 8. Credito residuo: ${iPhone8.numero404()}\nNumero chiamate: ${iPhone8.getNumeroChiamate()}`)
const galaxyW = new Smartphone()
console.log('Galaxy Wonder credito residuo:', galaxyW.numero404())
galaxyW.ricarica(100)
console.log('Galaxy Wonder Credito Residuo:', galaxyW.numero404())
galaxyW.chiamata(180)
console.log('Galaxy Wonder Credito Residuo:', galaxyW.numero404())
console.log('Galaxy Wonder Numero Chiamate:', galaxyW.getNumeroChiamate())
galaxyW.ricarica(50)
galaxyW.chiamata(10)
galaxyW.chiamata(1)
setTimeout(() => {
    galaxyW.chiamata(30)
    console.log(galaxyW)
}, 60000)
console.log('Galaxy Wonder Numero Chiamate:', galaxyW.getNumeroChiamate())
console.log('Galaxy Wonder Credito Residuo:', galaxyW.numero404())
galaxyW.generaRegistroChiamateFittizio(100)
console.log('Galaxy Wonder => Registro chiamate completo\n\n', galaxyW.mostraRegistroChiamate())
console.log('Galaxy Wonder => Registro chiamate filtrato per data e ora\n\n', galaxyW.filtraRegistroChiamate('11/11/2023', 19))
console.log('Galaxy Wonder => Registro chiamate filtrato per data e ora\n\n', galaxyW.filtraRegistroChiamate('10/11/2023', 15))
console.log('iPhone 5 => Registro chiamate completo\n\n', iPhone5.mostraRegistroChiamate())
console.log('iPhone 8 => Registro chiamate completo\n\n', iPhone8.mostraRegistroChiamate())