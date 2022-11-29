/*Опишіть, як можна створити новий HTML тег на сторінці.
    C помощь createElement можно создать любой тег и после чего добавить его на страницу,
    так же можно добавить с помощью innerHTML, что позволняет добавить тег и текст,
    insertAdjacentHTML позволяет нам добавить тег и текст и можно указать куда нам его поставить.
*/

/*Опишіть, що означає перший параметр функції insertAdjacentHTML і опишіть можливі варіанти цього параметра.
    Первый параметр позволяет нам указать куда мы хотием добавить наш html(с текстом или без).
    beforebegin - до открывающего тега
    afterbegin - перед первым потомком
    beforeend - после последнего потомка
    afterend - после закрывающего тега
*/

/*Як можна видалити елемент зі сторінки?
    С помощью метода remove() мы можем удалять элементы.
*/


const myArray = ["Kharkiv", "Kiev", ["Borispol", "Irpin", ['Spasibo', 'Bolshoe', "Alex"]], ["Odessa",['Hello']], "Lviv", "Dnieper"];



const createNewElement = function (array, parentArg = 'body') {
    const place = document.querySelector(parentArg);
    const list = document.createElement('ul');
    place.append(list);

    array.forEach((value) => {
        if (!Array.isArray(value)) {
            // list.insertAdjacentHTML('beforeend', `<li>${value}</li>`);
            const newElement = document.createElement(`li`);
            newElement.textContent = value;
            list.append(newElement);
        } else {
            list.append(createNewElement(value));
        };
    });

    return list;
};

createNewElement(myArray);






