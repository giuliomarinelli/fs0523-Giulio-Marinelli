const form = document.getElementById('form');
const showValue = () => {
    if (localStorage.getItem('utente')) document.getElementById('value').innerText = localStorage.getItem('utente');
}
window.addEventListener('load', showValue);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem('utente', document.getElementById('nome').value);
    e.target.reset();
    showValue();
})
document.getElementById('elimina').addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem('utente');
    document.getElementById('value').innerText = '';
})
//----------------------
let i;

if (!sessionStorage.getItem('secondi')) sessionStorage.setItem('secondi', 1);

setInterval(() => {
    i = Number(sessionStorage.getItem('secondi'));
    document.getElementById('contatore').innerText = i;
    i++;
    sessionStorage.setItem('secondi', i);
}, 1000)