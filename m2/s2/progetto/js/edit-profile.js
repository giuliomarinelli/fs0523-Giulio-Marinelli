document.querySelectorAll('.checkmark').forEach(el => {
    el.addEventListener('click', (e) => {
        console.log('click')
        console.log(el)
        if (el.getAttribute('data-checked') === 'true') {
            el.querySelector('input').removeAttribute('checked');
            el.innerText = '';
            el.setAttribute('data-checked', 'false');
        }
        if (el.getAttribute('data-checked') === 'false') {
            el.querySelector('input').setAttribute('checked', 'checked');
            el.innerHTML = '<i class="bi bi-check-lg"></i>';
            el.setAttribute('data-checked', 'true');
        }
    })
})