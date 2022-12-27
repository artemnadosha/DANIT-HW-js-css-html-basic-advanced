/*Напишіть, як ви розумієте рекурсію. Навіщо вона використовується на практиці?
    Рекурсия, это цикличность функции пока не выполнится условие если оно есть.
    На практике для если функция выполняет добавление, но встречается с неизветным для нее
    значением, типо массива допустим, можно вызвать функцию уже для этого массива, таким образом создать рекурсию.
*/

const input = document.querySelector('#userNumber');
const result = document.querySelector('.result');

const factorial = (number) => {
    const arrNumber = [];
    for (let i = number; i >= 0; i--) {
        if(i !== 0) {
            arrNumber.push(i);
        }
    }
    return arrNumber.reduce((acc, rec) => acc * rec);
}

input.oninput = () => {
    result.innerText = factorial(input.value);
};