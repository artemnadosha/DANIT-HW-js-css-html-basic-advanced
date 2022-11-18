/* Опишіть своїми словами як працює метод forEach
    Метод форИч работает как цикл, который перебирает все элементы массива,
    форИч является методом массива(встроенной функцией для массивов).
    Перебор с помощью форИч не создает новый массив.
*/
/*Як очистити масив?
    Очистить массив можно с помощью обнуления длинны массива
*/

/* Як можна перевірити, що та чи інша змінна є масивом?
    Это можно сделать с помощью метода массива isArray(),
    он вернер тру если это массив.
*/


const myArr = ['Hello', 'World', 23, '23', null];
const myArg = 'Artem';

const filterBy = function (myArr, myArg) {
    const filterByArr = [];

    myArr.forEach(item => {
        if(typeof item !== typeof myArg)
            filterByArr.push(item)
    });
    console.log(filterByArr);

    return filterByArr;
};

filterBy(myArr, myArg);