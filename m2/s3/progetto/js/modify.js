const params = new URLSearchParams(location.search);
const IdParam = params.get('id');
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
        [product] = productsArray.filter(el => el._id === IdParam);
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
    }

    name.addEventListener('keyup', () => {
        console.log('keypressed')
        Validation.validate('name');
    })
    description.addEventListener('keyup', () => {
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
    price.addEventListener('keyup', () => {
        console.log(brand.value)
        Validation.validate('price');
    })

    document.getElementById('form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const item = {
            name: name.value,
            description: description.value,
            brand: brand.value,
            imageUrl: imageUrl.value,
            price: price.value
        }
        e.target.reset()
        if (!params.size) {
            await App.AJAX('POST', item);
        } else if (IdParam) {
            await App.AJAX('PUT', item, product._id);
        }

    })

    document.getElementById('delBtn').addEventListener('click', async () => {
        if (params.size) {
            const res = await App.AJAX('DELETE', null, IdParam);
        }
    })
    document.getElementById('come-back').addEventListener('click', () => history.back())
    const showData = async () => console.log(await App.AJAX())
    showData()
})
