class Validation {
    static validation = false;
    static changeClass(item, newClass) {
        if (item.classList.contains('is-valid')) item.classList.remove('is-valid');
        if (item.classList.contains('is-invalid')) item.classList.remove('is-invalid');
        item.classList.add(newClass);
    }
    static setInvalidMessage(item, message) {
        item.parentElement.querySelector('.invalid-feedback').innerText = message;
    }
    static removeh21(item) {
        const h21 = item.parentElement.querySelector('.h-21');
        if (h21) h21.classList.add('d-none');
    }
    static async validate(itemId) {
        const item = document.getElementById(itemId);
        if (item.value === '') {
            this.changeClass(item, 'is-invalid');
            this.setInvalidMessage(item, 'Campo vuoto!');
            this.removeh21(item);
            return;
        }

        switch (itemId) {
            case 'brand':
                if (item.value === '0') {
                    this.changeClass(item, 'is-invalid');
                    this.setInvalidMessage(item, 'Devi selezionare una casa costruttrice!');
                    this.removeh21(item);
                    return;
                }
                break;
            case 'imageUrl': /*ATTENZIONE: è fondamentale usare Live Server o trovarsi comunque in un server. Controlla le estensioni
                                e si accerta che si tratti di un'immagine.
                                In alcuni casi il metodo fetch() potrebbe avere problemi di
                                cors policy. Per il resto, questo approccio di validazione è in grado di verificare che il
                                percorso (locale o remoto) inserito corrisponda a quello di un'immagine e di verificare che l'immagine
                                effettivamente esista, permettendo anche il caricamento in real time dell'anteprima e
                                la sua scomparsa quando l'url viene modificato con uno che risulta non valido.
                                */
                let res;
                try {
                    res = await fetch(item.value);
                } catch {
                    if (res.status === 429) App.tooManyRequests();
                }

                if (res.status !== 200) {
                    this.changeClass(item, 'is-invalid');
                    this.setInvalidMessage(item, `L'URL punta ad un'immagine che non esiste o è inaccessibile! Errore HTTP ${res.status}.`);
                    this.removeh21(item);
                    return;
                }
                let str;
                if (item.value.includes('?')) {
                    const ind = item.value.indexOf('?');
                    str = item.value.slice(0, ind);
                } else {
                    str = item.value;
                }
                const supportedFormats = ['png', 'apng', 'avif', 'jpg', 'jpeg', 'jfif', 'pjpeg', 'pjp', 'svg', 'webp'];
                let correctFormat = false;
                supportedFormats.forEach(el => {
                    if (str.endsWith(el) || str.startsWith(`data:image/${el}`)) correctFormat = true;
                })
                
                if (res.status === 200 && !correctFormat) {
                    this.changeClass(item, 'is-invalid');
                    this.setInvalidMessage(item, 'La risorsa ha un formato sconosciuto o non supportato! Probabilmente non è un\'immagine.');
                    return
                }
                break;
            case 'price':
                const regex = new RegExp((/^\d+$/g));
                if (!regex.test(item.value)) {
                    this.changeClass(item, 'is-invalid');
                    this.setInvalidMessage(item, 'Il prezzo deve essere un numero intero!');
                    this.removeh21(item);
                    return;
                }
                break;

        }
        this.removeh21(item);
        this.changeClass(item, 'is-valid');

    }
    static validateAll(...ids) {
        this.validation = false;
        const arrValues = [];
        ids.forEach(id => {
            this.validate(id)
            const item = document.getElementById(id);
            (item.classList.contains('is-valid') && !item.classList.contains('is-invalid')) ? arrValues.push(true) : arrValues.push(false)
        })
        if (arrValues.every(val => val === true)) this.validation = true;
    }
    static resetAll(...ids) {
        ids.forEach(id => {
            const item = document.getElementById(id);
            if (item.classList.contains('is-valid')) item.classList.remove('is-valid');
            if (item.classList.contains('is-invalid')) item.classList.remove('is-invalid');
            item.parentElement.querySelector('.h-21').classList.remove('d-none');
        })
    }
}