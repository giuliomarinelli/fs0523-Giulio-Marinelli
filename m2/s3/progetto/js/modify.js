const params = new URLSearchParams(location.search);
const idParam = params.get('id');
document.addEventListener('DOMContentLoaded', async () => {
    const name = document.getElementById('name');
    const decription = document.getElementById('description');
    const brand = document.getElementById('brand');
    const imageUrl = document.getElementById('imageUrl');
    const price = document.getElementById('price');
    let product;
    if (params.size) {
        const productsArray = await App.AJAX();
        console.log(productsArray);
        [product] = productsArray.filter(el => el._id === idParam);
        document.getElementById('h1').innerText = 'Modifica';
        const submit = document.getElementById('submit');
        submit.classList.remove('btn-primary');
        submit.classList.add('btn-warning', 'me-3');
        submit.innerText = 'Salva le modifiche';
        const delBtn = document.getElementById('delBtn');
        delBtn.classList.remove('d-none');
        name.value = product.name;
        description.value = product.description;
        brand.value = product.brand;
        imageUrl.value = product.imageUrl;
        price.value = product.price;
        Validation.validateAll('name', 'description', 'brand', 'imageUrl', 'price');
    }

    name.addEventListener('keyup', () => {
        console.log('keypressed')
        Validation.validate('name');
    })
    name.addEventListener('blur', () => {
        console.log('keypressed')
        Validation.validate('name');
    })
    description.addEventListener('keyup', () => {
        console.log('keypressed')
        Validation.validate('description');
    })
    description.addEventListener('blur', () => {
        console.log('keypressed')
        Validation.validate('description');
    })
    brand.addEventListener('change', () => {
        Validation.validate('brand');
    })
    imageUrl.addEventListener('keyup', () => { //ATTENZIONE: per questo tipo di validazione è fondamentale il live server o trovarsi
        // su un reale dominio
        Validation.validate('imageUrl');
    })
    imageUrl.addEventListener('blur', () => { //ATTENZIONE: per questo tipo di validazione è fondamentale il live server o trovarsi
        // su un reale dominio
        Validation.validate('imageUrl');
    })
    price.addEventListener('keyup', () => {
        console.log(brand.value)
        Validation.validate('price');
    })
    price.addEventListener('blur', () => {
        console.log(brand.value)
        Validation.validate('price');
    })

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
                await App.AJAX('POST', item);
                window.location.href = './back-office.html'
            } else if (idParam) {
                await App.AJAX('PUT', item, product._id);
            }
        } else (console.log('Errore di validazione'))
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
                    const resDel = await App.AJAX('DELETE', null, idParam);
                    console.log(resDel)
                    if (resDel.status === 200) {
                        Swal.fire({
                            title: "Prodotto eliminato",
                            text: "L'articolo è stato eliminato correttamente dalla banca dati",
                            showCancelButton: true,
                            confirmButtonColor: "#DD6B55",
                            confirmButtonText: "Ok"
                        })
                    }
                }
            })
        }
    })
    document.getElementById('come-back').addEventListener('click', () => history.back())
    const showData = async () => console.log(await App.AJAX())
    showData()
})
