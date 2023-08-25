/*Опишіть своїми словами що таке Document Object Model (DOM)
    Это структура нашего хтмл документа, балгодря ему у нас есть возможность влиять на него из вне,
    с помощью ДОМ мы получаем доступ к каждому элементу на страницу.
*/

/*Яка різниця між властивостями HTML-елементів innerHTML та innerText?
    ХТМЛ состоит с тегов и контента вы можете изменять непосредство в самой разметке, а с помощь inner*** можно
    внедрять теги и наполнение с вне.
*/

/*Як можна звернутися до елемента сторінки за допомогою JS? Який спосіб кращий?
    Имеет несколько способов обращение к элементу, одна некоторые из них считаются устраевшими исходя их этих слов
    одим из случших способов обратится к элементу страницы через querySelector, однако существуют и getElementBuy(Тег),
    Как  можно заметить querySelector достаточно уникален, поскольку вы можете обращался к одному элементу так и к нескольким
    с помощь добавление ALL и обращатся дальше к айди классу и т.д.
*/


const allParagraph = document.querySelectorAll('p');
const optionList = document.querySelector('#optionsList');
const testParagraph = document.querySelector('#testParagraph');
const mainHeader = document.querySelector('.main-header');
const sectionTitle = document.querySelectorAll('.section-title')


allParagraph.forEach(elem => elem.style.backgroundColor = '#ff0000');


console.log(optionList);
console.log(optionList.parentNode);
console.log(optionList.childNodes);


testParagraph.textContent = 'This is a paragraph';
console.log(testParagraph);


console.log(mainHeader);

for (let i = 0; i <= mainHeader.children.length - 1; ++i){
    console.log(mainHeader.children[i]);
    mainHeader.children[i].classList.add('nav-bar');
};


console.log(sectionTitle);
sectionTitle.forEach(elem => elem.classList.remove('section-title'));
console.log(sectionTitle);








