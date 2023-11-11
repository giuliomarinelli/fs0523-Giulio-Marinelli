class Validation {

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
            return false;
        }

        switch (itemId) {
            case 'brand':
                if (item.value === '0') {
                    console.log(item.value)
                    this.changeClass(item, 'is-invalid');
                    this.setInvalidMessage(item, 'Devi selezionare una casa costruttrice!');
                    return false;
                }
                break;
            case 'imageUrl': //ATTENZIONE: è fondamentale Live Server o trovarsi comunque in un server
                const res = await fetch(item.value);
                console.log(res);
                if (res.status === 404) {
                    this.changeClass(item, 'is-invalid');
                    this.setInvalidMessage(item, 'L\'URL punta ad un\'immagine che non esiste!');
                    return false;
                } 
                if (item.value.slice(-3) === 'png' || item.value.slice(-4) === 'apng' || item.value.slice(-4) === 'avif' || 
                item.value.slice(-3) === 'jpg' || item.value.slice(-4) === 'jpeg' || item.value.slice(-4) === 'jfif' || 
                item.value.slice(-5) === 'pjpeg' || item.value.slice(-3) === 'pjp' ||) 
                this.changeClass(item, 'is-valid');
                break;
            case 'price':
                if (!item.value.match(/([0-9]*[\.]{0,1}[0-9]{0,2})/)) {
                    console.log('prezzo errato')
                    this.changeClass(item, 'is-invalid');
                    this.setInvalidMessage(item, 'Il formato con cui è scritto il prezzo non è corretto!');
                }
        }

        this.changeClass(item, 'is-valid');
        return true;
    }
}