const params = new URLSearchParams(location.search);
const idParam = params.get('id');
document.addEventListener('DOMContentLoaded', async () => {
    const productsArray = await App.AJAX();
    const [product] = productsArray.filter(el => el._id === idParam);
    document.getElementById('h1').innerText = product.name;
    document.getElementById('product-image').src = product.imageUrl;
    document.getElementById('description').innerText = product.description;
    document.getElementById('brand').innerText = product.brand;
    document.getElementById('price').innerText = product.price;
    document.getElementById('come-back').addEventListener('click', () => history.back());
})