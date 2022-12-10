/*Опишіть своїми словами різницю між функціями setTimeout() і setInterval()`.
    Сет таймаут выполняет действие один раз через оприделенное время, а сет интервал выполняет действие циклично через какое то время
*/

/*Що станеться, якщо в функцію setTimeout() передати нульову затримку? Чи спрацює вона миттєво і чому?
   При 0 задержки, функция выполнится сразу, однако после того как выполнится весь код который есть если он есть.
*/

/*Чому важливо не забувати викликати функцію clearInterval(), коли раніше створений цикл запуску вам вже не потрібен?
    Он нужен для того, чтоб очистить в памяти наш вызов сет таймаута
*/


const imgWrapper = document.querySelector('.images-wrapper');
const imgActive = imgWrapper.querySelectorAll('*');
const timerOne = document.querySelector('.timer-one');
const timerTwo = document.querySelector('.timer-two');
const startTimer = document.getElementById('start');
const endTimer = document.getElementById('end');

let COUNT2 = 0;
let COUNT_MS = 1;
let timer;


const timerTwoFunc = function () {
    timer = setTimeout(() => {
        timerTwo.innerText = `Каждые 3 секунды смена: ${COUNT2}:${COUNT_MS}`;
        if(COUNT_MS === 100){
            COUNT2++;
            COUNT_MS = 1;
        };
        if(COUNT2 % 3 === 0) {
            imgActive.forEach(e => {
                e.classList.remove('active');
            })
            timerOne.innerText = `Счетчик показов: ${COUNT2 / 3 + 1}`;
            imgActive[(COUNT2 / 3) % 4].classList.add('active');
        };
        COUNT_MS++;
        timerTwoFunc();
    }, 10);
};

timerTwoFunc();


endTimer.addEventListener('click', (e) => {
    clearTimeout(timer);
});


startTimer.addEventListener('click', () => {
    timerTwoFunc();
});



