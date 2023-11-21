class SonAccount {
    protected balance: number
    constructor() {
        this.balance = 0
    }
    public deposit(amount: number): void {
        if (amount >= 0) {
            this.balance += amount
            console.log(`Versamento di ${amount} effettuato.
                Saldo contabile: ${this.balance - amount}€.
                Saldo disponibile: ${this.balance}€.`)
        } else {
            console.error('Hai inserito un importo di versamento negativo. Non consentito.')
        }
    }
    public withdraw(amount: number): void {
        if (amount >= 0) {
            if (this.balance >= amount) {
                this.balance -= amount;
                console.log(`Prelievo di ${amount}€ effettuato.
                Saldo contabile: ${this.balance + amount}€.
                Saldo disponibile: ${this.balance}€.`)
            } else {
                console.error(`Hai chiesto di prelevare ${amount}€ ma nel tuo conto sono presenti soltanto ${this.balance}€.
                    Impossibile prelevare, saldo insufficiente.`)
            }
        } else {
            console.error('Hai inserito un importo di prelievo negativo. Non consentito.')
        }
    }
}

class MotherAccount extends SonAccount {
    constructor() {
        super()
    }
    private alreadyAddedInterest: boolean = false
    public addInterest() {
        if (!this.alreadyAddedInterest) {
            this.alreadyAddedInterest = true;
            const interest: number = 0.1 * this.balance;
            this.balance *= 1.1;
            console.log(`Aggiunti 10% di interessi (${interest}€)`)
        } else {
            console.log('Non puoi riscuotere gli interessi di nuovo')
        }
    }
}

const son = new SonAccount()
const mother = new MotherAccount()

son.withdraw(-10);
son.withdraw(10)
son.deposit(1000)
son.withdraw(500)
mother.deposit(10000)
mother.addInterest()
mother.withdraw(5000)
mother.addInterest()