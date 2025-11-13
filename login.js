const button = document.querySelector('button');
const enameInput = document.querySelector('#ename');
const fnameInput = document.querySelector('#fname');
const passInput  = document.querySelector('#pass');

button.addEventListener('click', function (e) {
    e.preventDefault(); // hvis knappen ligger i en <form>

    console.log(enameInput.value, fnameInput.value, passInput.value);

    if (!enameInput.value || !fnameInput.value || !passInput.value) {
        alert('Alle felter skal udfyldes');
        return;
    }

    // Går til vores anden HTML
    window.location.href = 'app.html';
});