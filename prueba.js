const input = Array.from(document.getElementsByTagName('input'));
input.forEach(elem => elem.addEventListener('keyup', showKey));
input.forEach(elem => elem.addEventListener('blur', checkEmpty));

function showKey(e) {
    console.log(e.target.value);
    return null;
}

const phone = document.getElementById('phone');
console.log(phone);

phone.addEventListener('blur', checkNum);

function checkNum(e) {
    const phoneNum = e.target.value;
    const phoneReg = /[679][0-9]{8}/;
    if (phoneNum === '') {
        phone.className = 'form__control';
    } else if (phoneReg.test(phoneNum)) {
        phone.className = 'form__control form__control--valid';
    } else {
        phone.className = 'form__control form__control--invalid';
    }

    return null;
}

function checkEmpty(e) {
    const txt = e.target;
    if (txt.value === '') {
        txt.className = 'form__control';
    } else {
        txt.className = 'form__control form__control--valid';
    }

    return null;
}