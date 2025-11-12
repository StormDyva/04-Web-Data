const button = document.querySelector('button');
const fnameInput = document.querySelector('#fname');
const lnameInput = document.querySelector('#lname');
const bdateInput = document.querySelector('#bdate');
const passInput  = document.querySelector('#pass');

button.addEventListener('click', function (e) {
    e.preventDefault(); // hvis knappen ligger i en <form>

    console.log(fnameInput.value, lnameInput.value, bdateInput.value, passInput.value);

    if (!fnameInput.value || !lnameInput.value) {
        alert('Udfyld for- og efternavn');
        return;
    }

    // Går til vores anden HTML
    window.location.href = 'index.html';
});