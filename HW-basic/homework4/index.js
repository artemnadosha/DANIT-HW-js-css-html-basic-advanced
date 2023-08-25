/* Описати своїми словами навіщо потрібні функції у програмуванні.
    Функции нужны для того, чтоб повторять какую то часть кода в любом месте.
*/

/*Описати своїми словами, навіщо у функцію передавати аргумент.
    Поскольку функция выполняет какие то действия которые мы задали, мы можем передать наши аргументы,
    чтоб блок кода который она выполняет, выполнила с нашими аргументами. Например, если это добавление, наша функция
    не знает, что она должна добавлять, она добавляет аргумент + аргумент, в свою очередь мы вызывая функция подсказываем, 
    какие аргументы она должна использовать.
*/ 

/*Що таке оператор return та як він працює всередині функції?
    Оператор return в функции возвращает, что либо из нашей функции, если этот оператор не указан, 
    наша функция вернет undefined и по факту, мы не сможем использовать результат нашей функции.
    Так же оператор ruturn прекращает действие функции, все что написано после продолжаться не будет. 
*/



const app = document.getElementById('app');
const inputFirstNumber = app.querySelector('#num-one');
const inputOperator = app.querySelector('#operator');
const inputSecondNumber = app.querySelector('#num-two');
const calcButton = app.querySelector('#button-calc')
const result = app.querySelector('#res');



const calc = () => {
    calcButton.addEventListener('click', () => {
        const opertaions = {
            '+': +inputFirstNumber.value + +inputSecondNumber.value,
            '-': +inputFirstNumber.value - +inputSecondNumber.value,
            '*': +inputFirstNumber.value * +inputSecondNumber.value,
            '/': +inputFirstNumber.value / +inputSecondNumber.value
        };

        if (isNaN(inputFirstNumber.value) || isNaN(inputSecondNumber.value)) {
            result.innerText = 'Введите числа!';
        } else if (!opertaions[inputOperator.value]) {       
            result.innerText = 'Введите математический оператор (+,-,*,/)';
        } else if (!!inputFirstNumber.value && !!inputSecondNumber.value && !!inputOperator.value) {
            result.innerText = opertaions[inputOperator.value];
        } else {
            result.innerText = `Заполните все поля!`;
        };
    });
};

calc()

