const themeBtn = document.querySelector('.change-theme-btn');
const globalWrapper = document.querySelector('.wrapper');

if(localStorage.getItem('night-theme') === 'night'){
    themeBtn.textContent = 'Ночная тема'
    globalWrapper.classList.add('active-bg-sun')
    themeBtn.style.backgroundColor = 'black'
    themeBtn.style.color = 'white';
}
themeBtn.addEventListener('click', () => {

    if(themeBtn.textContent === 'Дневнная тема') {
        themeBtn.textContent = 'Ночная тема';
        themeBtn.style.backgroundColor = 'black'
        themeBtn.style.color = 'white';
        globalWrapper.classList.add('active-bg-sun')
        localStorage.setItem('night-theme', 'night')
    } else {
        themeBtn.textContent = 'Дневнная тема';
        themeBtn.style.backgroundColor = 'white';
        themeBtn.style.color = 'black';
        globalWrapper.classList.remove('active-bg-sun')
        localStorage.clear()
    };
});