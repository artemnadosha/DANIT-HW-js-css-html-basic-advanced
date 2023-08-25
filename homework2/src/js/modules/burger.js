const burgerMenu = document.querySelector('.burger-menu');
const navbarList = document.querySelector('.navbar-list');

export const burgerFunction = () => {
    burgerMenu.addEventListener('click', (el) => {
        burgerMenu.classList.toggle('active');
        navbarList.classList.toggle('active')
    })
}