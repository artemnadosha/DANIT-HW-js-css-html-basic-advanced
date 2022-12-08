const buttonWrapper = document.querySelector('.btn-wrapper')
const allButton = buttonWrapper.querySelectorAll('button');
document.body.addEventListener('keydown', e => {
    allButton.forEach(el => {
        el.style.backgroundColor = 'black';

        if(e.key.toUpperCase() === el.textContent || e.key === el.textContent) {
            el.style.backgroundColor = 'blue';
        };
    });
});



