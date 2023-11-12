
const template = document.getElementsByTagName('template')[0];
document.addEventListener('DOMContentLoaded', async () => {
    const productsArray = await App.AJAX();
    productsArray.forEach((el, ind) => { 
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector('.progressive-number').innerText = ind + 1;
        clone.querySelector('.name').innerText = el.name;
        clone.querySelector('.brand').innerText = el.brand;
        clone.querySelector('.edit-btn').href = `./modify.html?id=${el._id}`;
        clone.querySelector('.del-btn').setAttribute('data-id', el._id);
        document.getElementById('content').append(clone);
    })
    const loader = document.getElementById('loader');
    loader.classList.add('fade-out-animation');
    document.querySelectorAll('.del-btn').forEach(el => el.addEventListener('click', () => {
        const id = el.getAttribute('data-id');
        Swal.fire({
            title: "Sei sicuro di voler eliminare l'articolo?",
            text: "Confermando, l'articolo selezionato verrà eliminato permanentemente.",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Sì, procecdi con l'eliminazione!",
            cancelButtonText: "Annulla",
        }).then(async (res) => {
                if (res.value) {
                    await App.AJAX('DELETE', null, id);
                    const row = el.closest('tr');
                    row.classList.add('fade-out-animation');
                    setTimeout(
                        () => row.remove(),
                        500
                    )
                    console.log(row);

                } else if (res.dismiss == 'cancel') {
                    console.log('cancel');
                }
                else if (res.dismiss == 'esc') {
                    console.log('cancle-esc**strong text**');
                }
            })
    }))
    document.querySelectorAll('.enable').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            el.classList.add('d-none');
            el.parentElement.querySelector('.editing-mode').classList.remove('d-none');
            el.parentElement.querySelector('.editing-mode').classList.add('fade-in-animation');
            setTimeout(
                () => el.parentElement.querySelector('.editing-mode').classList.remove('fade-in-animation'),
                500
            )
        })
   
    })
    
    document.querySelectorAll('.disable').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            el.closest('.enable-disable-editing').querySelector('.enable').classList.add('fade-in-animation');
            el.closest('.enable-disable-editing').querySelector('.editing-mode').classList.add('fade-out-animation');
            setTimeout(
                () => {
                    el.closest('.enable-disable-editing').querySelector('.editing-mode').classList.add('d-none');
                    el.closest('.enable-disable-editing').querySelector('.editing-mode').classList.remove('fade-out-animation');
                    el.closest('.enable-disable-editing').querySelector('.enable').classList.remove('fade-in-animation');
                    el.closest('.enable-disable-editing').querySelector('.enable').classList.remove('d-none');
                },
                500
            )
            
            
        })
    })
    
    
})
