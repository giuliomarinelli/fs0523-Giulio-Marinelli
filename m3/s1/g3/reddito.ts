abstract class Tasse {
    protected tasseINPS!: number
    protected tasseIRPEF!: number
    protected aliquotaINPS: number = 25.98
    protected aliquotaIRPEF: number = 27
    protected imponibile!: number
    constructor(protected codeRedd: number, protected redditoAnnuoLordo: number) { }
    abstract get getUtileTasse(): string
    abstract get getTasseINPS(): string
    abstract get getTasseIRPEF(): string
    abstract get getRedditoAnnuoNetto(): string
    abstract get getRedditoAnnuoLordo(): string
}

class CalcolaTasse extends Tasse {
    constructor(codeRedd: number, redditoAnnuoLordo: number) {
        super(codeRedd, redditoAnnuoLordo)
        this.imponibile = redditoAnnuoLordo * codeRedd * 0.01
        this.tasseINPS = this.imponibile * this.aliquotaINPS * 0.01
        this.tasseIRPEF = this.imponibile * this.aliquotaIRPEF * 0.01
    }
    get getUtileTasse(): string {
        return (this.tasseINPS + this.tasseIRPEF).toFixed(2)
    }
    get getTasseINPS(): string {
        return this.tasseINPS.toFixed(2)
    }
    get getTasseIRPEF(): string {
        return (this.tasseIRPEF).toFixed(2)
    }
    get getRedditoAnnuoNetto(): string {
        return (this.redditoAnnuoLordo - (Number(this.getUtileTasse))).toFixed(2)
    }
    get getRedditoAnnuoLordo(): string {
        return this.redditoAnnuoLordo.toFixed(2)
    }
}

const prova = new CalcolaTasse(75, 27500)
console.log(prova, `\nReddito annuo lordo: ${prova.getRedditoAnnuoLordo}\n\n`,`Tasse INPS: ${prova.getTasseINPS}\n\n`, `Tasse IRPEF: ${prova.getTasseIRPEF}\n\n`,
`Totale imposte: ${prova.getUtileTasse}\n\n`, `Reddito annuo netto: ${prova.getRedditoAnnuoNetto}\n`)

