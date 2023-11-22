"use strict";
class Tasse {
    constructor(codeRedd, redditoAnnuoLordo) {
        this.codeRedd = codeRedd;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.aliquotaINPS = 25.98;
        this.aliquotaIRPEF = 27;
    }
}
class CalcolaTasse extends Tasse {
    constructor(codeRedd, redditoAnnuoLordo) {
        super(codeRedd, redditoAnnuoLordo);
        this.imponibile = redditoAnnuoLordo * codeRedd * 0.01;
        this.tasseINPS = this.imponibile * this.aliquotaINPS * 0.01;
        this.tasseIRPEF = this.imponibile * this.aliquotaIRPEF * 0.01;
    }
    get getUtileTasse() {
        return (this.tasseINPS + this.tasseIRPEF).toFixed(2);
    }
    get getTasseINPS() {
        return this.tasseINPS.toFixed(2);
    }
    get getTasseIRPEF() {
        return (this.tasseIRPEF).toFixed(2);
    }
    get getRedditoAnnuoNetto() {
        return (this.redditoAnnuoLordo - (Number(this.getUtileTasse))).toFixed(2);
    }
    get getRedditoAnnuoLordo() {
        return this.redditoAnnuoLordo.toFixed(2);
    }
}
const prova = new CalcolaTasse(75, 27500);
console.log(prova, `\nReddito annuo lordo: ${prova.getRedditoAnnuoLordo}\n\n`, `Tasse INPS: ${prova.getTasseINPS}\n\n`, `Tasse IRPEF: ${prova.getTasseIRPEF}\n\n`, `Totale imposte: ${prova.getUtileTasse}\n\n`, `Reddito annuo netto: ${prova.getRedditoAnnuoNetto}\n`);
