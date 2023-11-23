"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class CapoDiAbbigliamento {
    constructor(id, obj) {
        this.id = null;
        this.codprod = null;
        this.collezione = null;
        this.capo = null;
        this.modello = null;
        this.quantita = null;
        this.colore = null;
        this.prezzoivaesclusa = null;
        this.prezzoivainclusa = null;
        this.disponibile = null;
        this.saldo = null;
        this.id = id;
        if (obj)
            this.fillData(obj);
    }
    fillData(obj) {
        this.codprod = obj.codprod;
        this.collezione = obj.collezione;
        this.capo = obj.capo;
        this.modello = obj.modello;
        this.quantita = obj.quantita;
        this.colore = obj.colore;
        this.prezzoivaesclusa = obj.prezzoivaesclusa;
        this.prezzoivainclusa = obj.prezzoivainclusa;
        this.disponibile = obj.disponibile;
        this.saldo = obj.saldo;
    }
    get getsaldocapo() {
        if (this.prezzoivainclusa && this.saldo) {
            return this.prezzoivainclusa * (1 - (this.saldo * 0.01));
        }
        return null;
    }
    get getacquistocapo() {
        if (this.prezzoivainclusa)
            return this.prezzoivainclusa;
        return null;
    }
    static getData() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch('http://localhost:3000/end-point');
            console.log(res);
            const data = yield res.json();
            console.log(data);
            data.forEach((el) => this.data.push(el));
        });
    }
    static setDataAndCreateAllObjects() {
        const capiDiAbbigliamento = [];
        if (this.data) {
            this.data.forEach((el) => capiDiAbbigliamento.push(new CapoDiAbbigliamento(el.id, el)));
            return capiDiAbbigliamento;
        }
        return [];
    }
}
CapoDiAbbigliamento.data = [];
const capiDiAbbigliamento = () => __awaiter(void 0, void 0, void 0, function* () {
    yield CapoDiAbbigliamento.getData();
    const objects = CapoDiAbbigliamento.setDataAndCreateAllObjects();
    objects.forEach((el, ind) => {
        console.log(`------------OGGETTO N° ${ind + 1}\n\nProprietà:\n\n`, el, `Prezzo totale:\n\n ${el.getacquistocapo}\n\nPrezzo in saldo: ${el.getsaldocapo}`);
    });
});
capiDiAbbigliamento();
//# sourceMappingURL=abbigliamento.js.map