abstract class Tasse {
    protected tasseINPS!: number
    protected tasseIRPEF!: number
    protected aliquotaINPS: number = 25.98
    protected aliquotaIRPEF: number = 27
    protected imponibile!: number
    constructor(protected codeRedd: number, protected redditoAnnuoLordo: number) { }
    abstract get getUtileTasse(): number
    abstract get getTasseINPS(): number
    abstract get getTasseIRPEF(): number
    abstract get getRedditoAnnuoNetto(): number
}

class CalcolaTasse extends Tasse {
    constructor(codeRedd: number, redditoAnnuoLordo: number) {
        super(codeRedd, redditoAnnuoLordo)
        this.imponibile = redditoAnnuoLordo * codeRedd * 0.01
        this.tasseINPS = this.imponibile * this.aliquotaINPS * 0.01
        this.tasseIRPEF = this.imponibile * this.aliquotaIRPEF * 0.01
    }
    get getUtileTasse(): number {
        return this.tasseINPS + this.tasseIRPEF
    }
    get getTasseINPS(): number {
        return this.tasseINPS
    }
    get getTasseIRPEF(): number {
        return this.tasseIRPEF
    }
    get getRedditoAnnuoNetto(): number {
        return this.redditoAnnuoLordo - this.getUtileTasse
    }

}

const prova = new CalcolaTasse(78, 26000)
console.log(prova, prova.getTasseINPS, prova.getTasseIRPEF, prova.getUtileTasse, prova.getRedditoAnnuoNetto)

