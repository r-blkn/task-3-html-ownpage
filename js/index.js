let submitButton = document.querySelector('.form input[type=submit]');
submitButton.addEventListener('click', submit);

function submit(e) {
    e.preventDefault();
    fetch('login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            message: document.querySelector('.form unput[name=message]').value,
            name: document.querySelector('.form input[name=name]').value,
            email: document.querySelector('.form input[name=email]').value,
            phone: document.querySelector('.form input[name=phone]').value
        })
    })
        .then(_ => document.querySelector('.form').reset());
}