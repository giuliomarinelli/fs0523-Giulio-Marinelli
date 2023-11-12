// Mi chiedevo come si può oscurare dalla console gli errori che sono già gestiti dalla CRUD per non renderli visibili all'utente
class App {
    static endpoint = 'https://striveschool-api.herokuapp.com/api/product';
    static authToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZjI0NDI1NGU4ODAwMTgzZjE4YmYiLCJpYXQiOjE2OTk2MDcxMDksImV4cCI6MTcwMDgxNjcwOX0.F_Ec6SLhYWCBba58nqj_F1n3Mq00vsYFbylaWW5H2Yg';
    static lastHTTPRes = null;
    static async AJAX(method = 'GET', obj = {}, id = null) {
        let url;
        let options = {
            headers: {
                'Authorization': this.authToken
            }
        }
        switch (method) {
            case 'GET':
                url = this.endpoint;
                break;
            case 'POST':
                options.method = 'POST';
                options.body = JSON.stringify(obj);
                options.headers['Content-Type'] = 'application/json';
                url = this.endpoint;
                break;
            case 'PUT':
                options.method = 'PUT';
                options.body = JSON.stringify(obj);
                options.headers['Content-Type'] = 'application/json';
                url = `${this.endpoint}/${id}`;
                break;
            case 'DELETE':
                options.method = 'DELETE';
                url = `${this.endpoint}/${id}`;
                break;
        }

        const res = await fetch(url, options);
        this.lastHTTPRes = res;
        return await res.json();
    }

    static tooManyRequests() {
        const loader = document.getElementById('loader');
        const obscureViewport = document.getElementById('obscure-viewport');
        if (loader) loader.classList.add('fade-out-animation');
        if (obscureViewport.classList.contains('d-none')) obscureViewport.classList.remove('d-none');
        Swal.fire({
            title: "Errore HTTP 429. Troppe richieste inviate al server",
            text: `Le tue richieste al server sono state temporaneamente bloccate per evitare sovraccarichi.
            Se puoi, attendi qualche tempo e riprova. 
            Soltanto se hai urgenza e non navighi utilizzando un indirizzo IP statico, puoi risolvere così, ma per favore non abusare di questo metodo:
            spegni il tuo router, conta fino a 5 e poi riaccendilo. Riconnettiti ad internet. Verrà generato un nuovo indirizzo IP diverso dal precedente e l'accesso sarà nuovamente consentito.
            Per ulteriori problemi, contatta la nostra assistenza al numero che ti abbiamo fornito.`,
            showCancelButton: false,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Ok"
        })
    }

}
