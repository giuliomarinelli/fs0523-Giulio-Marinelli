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
        clone.querySelector('.del-btn').setAttribute('data-id', el._id);

        document.getElementById('content').append(clone);
    })
    console.log(document.querySelectorAll('.del-btn'))
    document.querySelectorAll('.del-btn').forEach(el => el.addEventListener('click', async () => {
        console.log('click');
        Swal.fire({
            title: "Sei sicuro di voler eliminare l'articolo?",
            text: "Confermando, l'articolo selezionato verrà eliminato permanentemente.",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Sì, procecdi con l'eliminazione!",
            cancelButtonText: "Annulla",
        }).then(async (res) => {
                if (res.value) {
                    console.log(await App.AJAX())
                } else if (res.dismiss == 'cancel') {
                    console.log('cancel');
                }
                else if (res.dismiss == 'esc') {
                    console.log('cancle-esc**strong text**');
                }
            });
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
