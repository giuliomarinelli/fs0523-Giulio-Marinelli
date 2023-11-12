const params = new URLSearchParams(location.search);
const idParam = params.get('id');
document.addEventListener('DOMContentLoaded', async () => {
    const obscureViewport = document.getElementById('obscure-viewport');
    const loader = document.getElementById('loader');
    const productsArray = await App.AJAX();
    if (App.lastHTTPRes.status === 429) App.tooManyRequests();
    const [product] = productsArray.filter(el => el._id === idParam);
    if (idParam === null) {
        loader.classList.add('fade-out-animation');
        Swal.fire({
            title: "Errore! Id prodotto mancante.",
            text: `Non posso mostrarti i dettagli del prodotto in quanto il suo codice identificativo non è correttamente specificato come parametro nell'url della pagina`,
            showCancelButton: false,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Ok"
        }).then((res) => {
            if (res.value) {
                window.location.href = './index.html';
            }
        })
    }
    else if (idParam.length === 0) {
        loader.classList.add('fade-out-animation');
        Swal.fire({
            title: "Errore! Id prodotto privo di informazioni.",
            text: `Non posso mostrarti i dettagli del prodotto in quanto il suo codice identificativo, specificato nell'url della pagina, non contiene informazioni.`,
            showCancelButton: false,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Ok"
        }).then((res) => {
            if (res.value) {
                window.location.href = './index.html';
            }
        })
    } else if (!product) {
        loader.classList.add('fade-out-animation');
        Swal.fire({
            title: "Errore! Id prodotto non riconosciuto.",
            text: `L'id "${idParam}" specificato nell'url della pagina si riferisce ad un prodotto che non è presente in banca dati, oppure non è formattato nel modo corretto e quindi non punta al prodotto desiderato. Impossibile mostrare dettagli.`,
            showCancelButton: false,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Ok"
        }).then((res) => {
            if (res.value) {
                window.location.href = './index.html';
            }
        })
    }
    document.getElementById('h1').innerText = product.name;
    document.getElementById('product-image').src = product.imageUrl;
    document.getElementById('description').innerText = product.description;
    document.getElementById('brand').innerText = product.brand;
    document.getElementById('price').innerText = product.price;
    loader.classList.add('fade-out-animation');
    obscureViewport.classList.add('fade-out-animation');
    setTimeout(() => {
        obscureViewport.remove()
        loader.remove()
    }
        , 400)
    document.getElementById('come-back').addEventListener('click', () => history.back());
})