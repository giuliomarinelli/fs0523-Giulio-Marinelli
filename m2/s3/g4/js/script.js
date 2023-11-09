const token = '1ZVUZBmDWIeazI5dbZvSW5jakcebCpWVEvBhmWAD7g7CyzbJoPjDe4S0';
const url = 'https://api.pexels.com/v1/search?query=';

document.addEventListener('DOMContentLoaded', () => document.querySelectorAll('.hides').forEach(el => el.innerText = 'Hide'));

let initializedImg = false;

const initImgs = () => {
    document.querySelectorAll('.bd-placeholder-img.card-img-top').forEach(el => el.remove());
    document.querySelectorAll('.card').forEach(el => {
        const img = document.createElement('img');
        img.classList.add('picture');
        img.style.maxHeight = '175px';
        el.prepend(img);
    })
    initializedImg = true;
}

const implementImages = (data, e, ...PD) => {
    if (!initializedImg) initImgs();
    e.preventDefault();
    const pictures = document.querySelectorAll('.picture');
    const imgIds = document.querySelectorAll('.img-id');
    data.photos.forEach((el, ind) => {

        pictures[ind].src = el.src.small;
        pictures[ind].alt = el.alt;
        imgIds[ind].innerText = el.id;

        document.querySelectorAll('.picture').forEach(el => el.addEventListener('click', () => {
            console.log('click');
            const idImg = el.
            window.location.href = `./detail.html?id=${idImg}&query=${localStorage.getItem('pictures-query')}`;
        }))
    })
}

const implementImagesFromSearch = async (e) => {
    e.preventDefault();
    const urlFromsearch = `${url}${document.getElementById('search-field').value}&per_page=9`;
    const data = await fetch(urlFromsearch, options).then(res => res.json());
    localStorage.setItem(document.getElementById('search-field').value);
    implementImages(data, e);
}

const options = {
    method: 'GET',
    headers: { Authorization: token }
}


const app = async () => {
    const url1 = `${url}landscape&per_page=9`;
    const url2 = `${url}sea&per_page=9`;

    const [images, secondaryImages] = await Promise.all([
        fetch(url1, options).then(res => res.json()),
        fetch(url2, options).then(res => res.json())
    ])
    console.log(images, secondaryImages);
    document.getElementById('load-images').addEventListener('click', (e) => {
        implementImages(images, e);
        localStorage.setItem('pictures-query', 'landscape');
    })
    document.getElementById('load-secondary-images').addEventListener('click', (e) => {
        implementImages(secondaryImages, e);
        localStorage.setItem('pictures-query', 'sea');
    })
    document.querySelectorAll('.hides').forEach(el => el.addEventListener('click', () => el.closest('.card').remove()));
    document.getElementById('search-form').addEventListener('submit', (e) => implementImagesFromSearch(e));
    
}
app()
