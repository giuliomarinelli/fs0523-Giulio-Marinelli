const template = document.getElementsByTagName('template')[0];
document.addEventListener('DOMContentLoaded', async () => {
    const productsArray = await App.AJAX();
    productsArray.forEach(el => {
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector('.card-title').innerText = el.name;
        clone.querySelector('.card-text').innerText = el.description;
        clone.querySelector('.brand-text').innerText = el.brand;
        clone.querySelector('.card-img-top').src = el.imageUrl;
        clone.querySelector('.price').innerText = el.price;
        clone.querySelector('.modify-btn').href = `./modify.html?id=${el._id}`;
        document.getElementById('content').append(clone);
    })
    console.log(document.querySelectorAll('.del-btn'))
    document.querySelectorAll('.del-btn').forEach(el => el.addEventListener('click', async () => {
        console.log('click');
        Swal.fire({
            title: "Are you sure?",
            text: "But you will still be able to retrieve this file.",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, archive it!",
            cancelButtonText: "No, cancel please!",
            closeOnConfirm: false,
            closeOnCancel: false
        })
    }))
    let enable = false;
    const enableLink = document.getElementById('enable');
    enableLink.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.mod').forEach(el => {
            el.classList.toggle('d-none');
            el.classList.toggle('d-flex');

        })
        if (!enable) {
            enable = true;
            enableLink.firstChild.classList.remove('text-primary');
            enableLink.firstChild.classList.add('text-danger');
        } else {
            enable = false;
            enableLink.firstChild.classList.add('text-primary');
            enableLink.firstChild.classList.remove('text-danger');
        }

    })
})
