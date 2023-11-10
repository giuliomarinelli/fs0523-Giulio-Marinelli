const params = new URLSearchParams(location.search);
const IdParam = params.get('id');
document.addEventListener('DOMContentLoaded', async () => {
    if (params.size) {
        document.getElementById('h1').innerText = 'Modifica';
        const submit = document.getElementById('submit');
        submit.classList.remove('btn-primary');
        submit.classList.add('btn-warning', 'me-3');
        submit.innerText = 'Salva le modifiche';
        const delBtn = document.getElementById('delBtn');
        delBtn.classList.remove('d-none');
        const productsArray = await App.AJAX();
        console.log(productsArray);
        const [product] = productsArray.filter(el => el._id === IdParam);
        document.getElementById('name').value = product.name;
        document.getElementById('description').value = product.description;
        document.getElementById('brand').value = product.brand;
        document.getElementById('imageUrl').value = product.imageUrl;
        document.getElementById('price').value = product.price;

    }
})
document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const item = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        brand: document.getElementById('brand').value,
        imageUrl: document.getElementById('imageUrl').value,
        price: document.getElementById('price').value
    }
    e.target.reset()
    if (!params.size) {
        await App.AJAX('POST', item);
    } else if (IdParam) {
        await App.AJAX('PUT', item, IdParam);
    }
})

document.getElementById('delBtn').addEventListener('click', async () => {
    if (params.size) {
        const res = await App.AJAX('DELETE', null, IdParam);
        console.log(res);
    }
})

const showData = async () => console.log(await App.AJAX())
showData()