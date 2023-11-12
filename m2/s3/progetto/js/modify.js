const params = new URLSearchParams(location.search);
const idParam = params.get('id');
document.addEventListener('DOMContentLoaded', async () => {
    const obscureViewport = document.getElementById('obscure-viewport');
    const loader = document.getElementById('loader');
    const previewImg = document.getElementById('preview-img');
    const showPreviewImg = () => {
        if (imageUrl.classList.contains('is-valid')) {
            if (previewImg.classList.contains('fade-out-animation'))
                previewImg.classList.remove('fade-out-animation')
            previewImg.classList.remove('d-none');
            previewImg.classList.add('fade-in-animation');
            previewImg.src = imageUrl.value;
        } else if (imageUrl.classList.contains('is-invalid')) {
            if (previewImg.classList.contains('fade-in-animation'))
                previewImg.classList.remove('fade-in-animation');
            previewImg.classList.add('fade-out-animation');
            setTimeout(
                () => previewImg.classList.add('d-none'), 500
            )
        }
    }
    const name = document.getElementById('name');
    const decription = document.getElementById('description');
    const brand = document.getElementById('brand');
    const imageUrl = document.getElementById('imageUrl');
    const price = document.getElementById('price');
    let product;
    let productsArray;
    if (params.size) {
        document.getElementById('delBtn').classList.remove('d-none');
        try {
            productsArray = await App.AJAX();
        } catch {
            if (App.lastHTTPRes.status === 429) App.tooManyRequests();
        }
        [product] = productsArray.filter(el => el._id === idParam);
        if (idParam === null) {
            loader.classList.add('fade-out-animation');
            Swal.fire({
                title: "Errore! Id prodotto mancante.",
                text: `Non posso farti modificare il prodotto in quanto il suo codice identificativo non è correttamente specificato come parametro nell'url della pagina`,
                showCancelButton: false,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Ok"
            }).then((res) => {
                if (res.value) {
                    window.location.href = './back-office.html';
                }
            })
        }
        else if (idParam.length === 0) {
            loader.classList.add('fade-out-animation');
            Swal.fire({
                title: "Errore! Id prodotto privo di informazioni.",
                text: `Non posso farti modificare il prodotto in quanto il suo codice identificativo, specificato nell'url della pagina, non contiene informazioni.`,
                showCancelButton: false,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Ok"
            }).then((res) => {
                if (res.value) {
                    window.location.href = './back-office.html';
                }
            })
        } else if (!product) {
            loader.classList.add('fade-out-animation');
            Swal.fire({
                title: "Errore! Id prodotto non riconosciuto.",
                text: `L'id "${idParam}" specificato nell'url della pagina si riferisce ad un prodotto che non è presente in banca dati, oppure non è formattato nel modo corretto e quindi non punta al prodotto desiderato. Impossibile modificare.`,
                showCancelButton: false,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Ok"
            }).then((res) => {
                if (res.value) {
                    window.location.href = './back-office.html';
                }
            })
        }
        document.getElementById('h1').innerText = 'Modifica';
        const submit = document.getElementById('submit');
        submit.classList.remove('btn-primary');
        submit.classList.add('btn-warning', 'me-2');
        submit.innerText = 'Salva le modifiche';
        const delBtn = document.getElementById('delBtn');
        delBtn.classList.remove('d-none');
        name.value = product.name;
        description.value = product.description;
        brand.value = product.brand;
        imageUrl.value = product.imageUrl;
        price.value = product.price;
        Validation.validateAll('name', 'description', 'brand', 'imageUrl', 'price');
        setTimeout(() => showPreviewImg(), 50);
    }
    loader.classList.add('fade-out-animation');
    obscureViewport.classList.add('fade-out-animation');
    setTimeout(() => {
        obscureViewport.remove()
        loader.remove()
    }
        , 400)

    name.addEventListener('keyup', () => Validation.validate('name'));
    name.addEventListener('blur', () => Validation.validate('name'));
    description.addEventListener('keyup', () => Validation.validate('description'));
    description.addEventListener('blur', () => Validation.validate('description'));
    brand.addEventListener('change', () => Validation.validate('brand'))
    imageUrl.addEventListener('keyup', () => {
        Validation.validate('imageUrl');
        setTimeout(() => showPreviewImg(), 50);
    })
    imageUrl.addEventListener('blur', () => {
        Validation.validate('imageUrl')
        showPreviewImg();
    })
    //ATTENZIONE: per questo ultimo tipo di validazione (imageUrl) è fondamentale il live server o trovarsi su un reale dominio
    price.addEventListener('keyup', () => Validation.validate('price'));
    price.addEventListener('blur', () => Validation.validate('price'));

    document.getElementById('form').addEventListener('submit', async (e) => {
        e.preventDefault();

        Validation.validateAll('name', 'description', 'brand', 'imageUrl', 'price');

        if (Validation.validation) {
            const item = {
                name: name.value,
                description: description.value,
                brand: brand.value,
                imageUrl: imageUrl.value,
                price: price.value
            }
            if (!params.size) {
                try {
                    await App.AJAX('POST', item);
                } catch {
                    if (App.lastHTTPRes.status === 429) App.tooManyRequests();
                } finally {
                    if (App.lastHTTPRes.status === 200) {
                        Swal.fire({
                            title: "Prodotto aggiunto correttamente",
                            text: `L'articolo "${item.name}" è stato correttamente aggiunto alla banca dati.`,
                            showCancelButton: false,
                            confirmButtonColor: "#DD6B55",
                            confirmButtonText: "Ok"
                        }).then((res) => {
                            if (res.value) {
                                window.location.href = './back-office.html';
                            }
                        })
                    }
                }
            } else if (idParam) {
                try {
                    await App.AJAX('PUT', item, product._id);
                } catch {
                    if (App.lastHTTPRes.status === 429) App.tooManyRequests();
                } finally {
                    if (App.lastHTTPRes.status === 200) {
                        Swal.fire({
                            title: "Prodotto modificato e salvato correttamente",
                            text: `Le modifiche messe in atto sull'articolo "${item.name}" sono state correttamente salvate nella banca dati.`,
                            showCancelButton: false,
                            confirmButtonColor: "#DD6B55",
                            confirmButtonText: "Ok"
                        }).then((res) => {
                            if (res.value) {
                                window.location.href = './back-office.html';
                            }
                        })
                    }
                }
            }
        } else {
            Swal.fire({
                title: "Impossibile salvare i dati",
                text: 'Sono presenti uno o più errori di compilazione che impediscono di salvare i dati correttamente. Ricontrolla i campi evidenziati in rosso!',
                showCancelButton: false,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Ok"
            })
        }
    })

    document.getElementById('delBtn').addEventListener('click', async () => {
        if (params.size) {

            Swal.fire({
                title: "Sei sicuro di voler eliminare l'articolo?",
                text: "Confermando, l'articolo selezionato verrà eliminato permanentemente.",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Sì, procecdi con l'eliminazione!",
                cancelButtonText: "Annulla",
            }).then(async (res) => {
                if (res.value) {
                    await App.AJAX('DELETE', null, idParam);
                    if (App.lastHTTPRes.status === 429) App.tooManyRequests();
                    if (App.lastHTTPRes.status === 200) {
                        Swal.fire({
                            title: "Prodotto eliminato",
                            text: "L'articolo è stato eliminato correttamente dalla banca dati",
                            showCancelButton: false,
                            confirmButtonColor: "#DD6B55",
                            confirmButtonText: "Ok"
                        }).then((res) => {
                            if (res.value) {
                                window.location.href = './back-office.html';
                            }
                        })
                    }
                }
            })
        }
    })
    let resetConfirm = false;
    document.getElementById('form').addEventListener('reset', (e) => {
        if (!resetConfirm) {
            e.preventDefault();
            Swal.fire({
                title: "Sei sicuro di voler resettare il form?",
                text: 'L\'operazione cancellerà tutti i campi e riporterà il form al suo stato di default',
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Sì, sono sicuro",
                cancelButtonText: "Annulla"
            }).then((res) => {
                if (res.value) {
                    resetConfirm = true;
                    e.target.reset();
                    Validation.resetAll('name', 'description', 'brand', 'imageUrl', 'price');
                }
            })
        } else {
            resetConfirm = false;
        }
    })
    document.getElementById('come-back').addEventListener('click', () => history.back())
})
