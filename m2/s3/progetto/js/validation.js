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

    static async validate(itemId) {
        const item = document.getElementById(itemId);
        if (item.value === '') {
            this.changeClass(item, 'is-invalid');
            this.setInvalidMessage(item, 'Campo vuoto!');
            return;
        }

        switch (itemId) {
            case 'brand':
                if (item.value === '0') {
                    console.log(item.value)
                    this.changeClass(item, 'is-invalid');
                    this.setInvalidMessage(item, 'Devi selezionare una casa costruttrice!');
                    return;
                }
                break;
            case 'imageUrl': //ATTENZIONE: è fondamentale Live Server o trovarsi comunque in un server
                const res = await fetch(item.value);
                console.log(res);
                if (res.status === 404) {
                    this.changeClass(item, 'is-invalid');
                    this.setInvalidMessage(item, 'L\'URL punta ad un\'immagine che non esiste!');
                    return;
                }
                let str;
                if (item.value.includes('?')) {
                    const ind = item.value.indexOf('?');
                    str = item.value.slice(0, ind);
                } else {
                    str = item.value;
                }
                if (!(str.slice(-3) === 'png' || str.slice(-4) === 'apng' || str.slice(-4) === 'avif' ||
                    str.slice(-3) === 'jpg' || str.slice(-4) === 'jpeg' || str.slice(-4) === 'jfif' ||
                    str.slice(-5) === 'pjpeg' || str.slice(-3) === 'pjp' || str.slice(-3) === 'svg' ||
                    str.slice(-4) === 'webp')) return false;
                break;
            case 'price':
                const regex = new RegExp((/^\d+$/g));
                if (!regex.test(item.value)) {

                    console.log('prezzo errato')
                    this.changeClass(item, 'is-invalid');
                    this.setInvalidMessage(item, 'Il formato con cui è scritto il prezzo non è corretto!');
                    return;
                }
                break;

        }


        this.changeClass(item, 'is-valid');
        
    }
    static validateAll(...ids) {
        const arrValues = [];
        ids.forEach(id => {
            this.validate(id)
            const item = document.getElementById(id);
            (item.classList.contains('is-valid') && !item.classList.contains('is-invalis')) ? arrValues.push(true) : arrValues.push(false)
        })
        console.log(arrValues)
        if (arrValues.every(val => val === true)) this.validation = true;
    }
}