const template = document.getElementsByTagName('template')[0];
const createCard = (book) => {
    const card = template.content.firstElementChild.cloneNode(true);
    card.setAttribute('data-id', book.asin)
    card.querySelector('[data-img="img"]').src = book.img;
    card.querySelector('[data-title="title"]').innerText = book.title;
    card.querySelector('[data-price="price"]').innerText = `${book.price}€`;
    return card;
}
fetch('https://striveschool-api.herokuapp.com/books')
    .then(res => res.json())
    .then(data => {
        data.forEach(book => {
            const card = createCard(book);
            cardWrapper = document.createElement('div');
            cardWrapper.setAttribute('data-card-wrapper', 'data-card-wrapper')
            cardWrapper.classList.add('card-basis');
            document.getElementById('content').append(cardWrapper);
            cardWrapper.append(card);
        })
        document.querySelectorAll('[data-btn="scarta"]').forEach(btn => {
            btn.addEventListener('click', (e) => e.target.closest('.card-basis').remove());
        })
        document.querySelectorAll('[data-btn="aggiungi-al-carrello"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const asin = e.target.closest('.card').getAttribute('data-id');
                const [book] = data.filter(el => el.asin === asin);
                const bookTitle = document.createElement('li');
                const h5 = document.createElement('h5');
                h5.classList.add('h5');
                h5.innerText = book.title;
                const delBtn = document.createElement('button');
                delBtn.classList.add('btn');
                delBtn.classList.add('btn-danger');
                delBtn.classList.add('mt-1');
                delBtn.innerHTML = '<i class="bi bi-trash"></i> Rimuovi dal carrello';
                delBtn.setAttribute('data-btn', 'rimuovi-dal-carrello');
                bookTitle.append(h5, delBtn);
                document.getElementById('cart').prepend(bookTitle);
                document.querySelectorAll('[data-btn="rimuovi-dal-carrello"]').forEach(el => {
                    el.addEventListener('click', (e) => e.target.closest('li').remove());
                });
            });
        })
        
    }


    )

