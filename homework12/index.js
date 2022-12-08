const buttonWrapper = document.querySelector('.btn-wrapper')
const allButton = buttonWrapper.querySelectorAll('button');
document.body.addEventListener('keydown', e => {
    allButton.forEach(el => {
            if(e.key.toUpperCase() === el.textContent.toUpperCase()) {
                el.style.backgroundColor = 'blue';
            } else {
                el.style.backgroundColor = 'black';
            };
    });
});



