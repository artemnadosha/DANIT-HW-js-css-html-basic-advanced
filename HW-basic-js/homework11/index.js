const form = document.querySelector('.password-form');
const inputLabel = form.querySelectorAll('.input-wrapper');
const icon = form.querySelectorAll('.icon-password');
const validList = document.querySelector('.list-valid');
const firstInput = form.querySelector('input');
const buttonSubmit = form.querySelector('button');

inputLabel.forEach(elemPassword => elemPassword.addEventListener('click', targetPassword => {
    icon.forEach(iconTarget => {
        if(targetPassword.target === iconTarget) {
            const input = elemPassword.querySelector('input');
            const iconLab = elemPassword.querySelectorAll('.icon-password');

            iconLab.forEach(el => {
                el.classList.toggle('active');
            });

            if(input.getAttribute('type') === 'password') {
                input.setAttribute('type', 'text');
            } else {
                input.setAttribute('type', 'password');
            };
        };
    });
}));

const compareValue = (myArr) => {
    return myArr[0] === myArr[1];
};
form.addEventListener('submit', e => {
    e.preventDefault();

    const myArr = [];

    inputLabel.forEach(e => {
        myArr.push(e.querySelector('input').value);
    });

    if(compareValue(myArr)){
        alert('Поздравляю вы вошли');
    } else {
        alert('Введите одинаковый пароль');
    };
});


buttonSubmit.disabled = true;

firstInput.addEventListener('keyup', e => {

    const checkLitterUp = /[A-Z]/g.test(e.target.value);
    const checkLitterDown = /[a-z]/g.test(e.target.value);
    const checkLength = e.target.value.length >= 8;
    const checkNumber = /[0-9]/g.test(e.target.value)

   if(checkNumber) {
       validList.querySelector('[data-text=number]').style.color = 'green';
   } else {
       validList.querySelector('[data-text=number]').style.color = 'red';
   };

    if(checkLitterUp) {
        validList.querySelector('[data-text=big]').style.color = 'green';
    } else {
        validList.querySelector('[data-text=big]').style.color = 'red';
    };

    if(checkLitterDown) {
        validList.querySelector('[data-text=small]').style.color = 'green';
    } else {
        validList.querySelector('[data-text=small]').style.color = 'red';
    };

    if(checkLength) {
        validList.querySelector('[data-text=length]').style.color = 'green';
    } else {
        validList.querySelector('[data-text=length]').style.color = 'red';
    };

    if(checkLitterUp && checkLitterDown && checkLength && checkNumber) {
            buttonSubmit.disabled = false;
        } else {
            buttonSubmit.disabled = true;
        };
});

