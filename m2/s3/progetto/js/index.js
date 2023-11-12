const template = document.getElementsByTagName('template')[0];
document.addEventListener('DOMContentLoaded', async () => {

    const productsArray = await App.AJAX();
    productsArray.forEach(el => {
        const clone = template.content.firstElementChild.cloneNode(true);
        console.log(clone);
        clone.querySelector('.card-title').innerText = el.name;
        clone.querySelector('.price').innerText = el.price;
        clone.querySelector('.card-img-top').src = el.imageUrl;
        clone.querySelector('.show-details').href = `./product-details.html?id=${el._id}`;
        document.getElementById('content').append(clone);
    });
    const loader = document.getElementById('loader');
    loader.classList.add('fade-out-animation');
})