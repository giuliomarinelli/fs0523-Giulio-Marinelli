type Data = {
    id: number
    codprod: number
    collezione: string
    capo: string
    modello: number
    quantita: number
    colore: string
    prezzoivaesclusa: number
    prezzoivainclusa: number
    disponibile: string
    saldo: number

}

class CapoDiAbbigliamento {
    private id: number | null = null
    private codprod: number | null = null
    private collezione: string | null = null
    private capo: string | null = null
    private modello: number | null = null
    private quantita: number | null = null
    private colore: string | null = null
    private prezzoivaesclusa: number | null = null
    private prezzoivainclusa: number | null = null
    private disponibile: string | null = null
    private saldo: number | null = null
    constructor(id: number, obj?: Data) {
        this.id = id
        if (obj) this.fillData(obj)
    }
    public fillData(obj: Data) {
        this.codprod = obj.codprod
        this.collezione = obj.collezione
        this.capo = obj.capo
        this.modello = obj.modello
        this.quantita = obj.quantita
        this.colore = obj.colore
        this.prezzoivaesclusa = obj.prezzoivaesclusa
        this.prezzoivainclusa = obj.prezzoivainclusa
        this.disponibile = obj.disponibile
        this.saldo = obj.saldo
    }
    public get getsaldocapo(): number | null {
        if (this.prezzoivainclusa && this.saldo) {
            return this.prezzoivainclusa * (1 - (this.saldo * 0.01))
        }
        return null
    }
    public get getacquistocapo(): number | null {
        if (this.prezzoivainclusa) return this.prezzoivainclusa
        return null
    }
    private static data: Data[] = []
    public static async getData(): Promise<undefined> {
        const res: Response = await fetch('http://localhost:3000/end-point')
        console.log(res)
        const data: Data[] = await res.json()
        console.log(data)
        data.forEach((el: Data) => this.data.push(el))
    }
    public static setDataAndCreateAllObjects(): CapoDiAbbigliamento[] {
        const capiDiAbbigliamento: CapoDiAbbigliamento[] = []
        if (this.data) {
            this.data.forEach((el: Data) => capiDiAbbigliamento.push(new CapoDiAbbigliamento(el.id, el)))
            return capiDiAbbigliamento
        }
        return []
    }
}

const capiDiAbbigliamento = async (): Promise<undefined> => {
    await CapoDiAbbigliamento.getData()
    const objects: CapoDiAbbigliamento[] = CapoDiAbbigliamento.setDataAndCreateAllObjects()
    objects.forEach((el: CapoDiAbbigliamento, ind: number) => {
        console.log(`------------OGGETTO N° ${ind + 1}\n\nProprietà:\n\n`,
        el,
        `Prezzo totale:\n\n ${el.getacquistocapo}\n\nPrezzo in saldo: ${el.getsaldocapo}`)
    })

}
capiDiAbbigliamento()