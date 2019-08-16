document.querySelector('#section-constructor-form').addEventListener('submit', e => {
    e.preventDefault();
    fetch('addorder', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: document.querySelector(`#section-constructor-form #name`).value,
            number: document.querySelector(`#section-constructor-form #number`).value,
            typeMotor: document.querySelector(`#section-constructor-form #type-motor`).value,
            typeBattery: document.querySelector(`#section-constructor-form #type-battery`).value,
            sizeWheel: document.querySelector(`input[name='size-wheel']:checked`).value,
            widthWheel: document.querySelector(`input[name='width-wheel']:checked`).value,
            charger: document.querySelector(`input[name='charger']`).checked,
            doublePendant: document.querySelector(`input[name='double-pendant']`).checked,
            wings: document.querySelector(`input[name='wings']`).checked,
            coment: document.querySelector(`textarea[name='coment']`).value
        })
    })
        .then(response => response.text())
        .then(str => alert(str))
        .then(_ => document.querySelector('#section-constructor-form').reset());
});
document.querySelector('#section-question-form').addEventListener('submit', e => {
    e.preventDefault();
    fetch('callme', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            number: document.querySelector('#CallMeNumber').value
        })
    })
        .then(response => response.text())
        .then(str => alert(str))
        .then(_ => document.querySelector('#section-question-form').reset());
});