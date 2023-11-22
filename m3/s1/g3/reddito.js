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
        return this.tasseINPS + this.tasseIRPEF;
    }
    get getTasseINPS() {
        return this.tasseINPS;
    }
    get getTasseIRPEF() {
        return this.tasseIRPEF;
    }
    get getRedditoAnnuoNetto() {
        return this.redditoAnnuoLordo - this.getUtileTasse;
    }
}
const prova = new CalcolaTasse(78, 26000);
console.log(prova, prova.getTasseINPS, prova.getTasseIRPEF, prova.getUtileTasse, prova.getRedditoAnnuoNetto);
