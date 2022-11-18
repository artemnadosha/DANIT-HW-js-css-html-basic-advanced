/*Які існують типи даних у Javascript?
    В джс существует 8 типов данных
    1.string
    2.number
    3.null
    4.undefined
    5.Boolean
    6.Object 
    7.bigInt
    8.symbol
*/

/*У чому різниця між == і ===?
    Строгое'===',не строгое сравнение'==' отличие между ними заключается,
    что при не строгом сравнение тип данных не учитывается, 
    а, просто идет сравнение, в строгом учитывается тип данных
*/ 

/* Що таке оператор?
    Это функция которая ожидает операнды, которые будут опираться на этот оператор,
    сам оператор выполняет то или иное действие, что прописано в его функции, математические, логические действия и т.д.
*/





let name = prompt('Как тебя зовут?');
const REGULAR_WORD = /\d/g;

const сheckUserName = function(name) {
    if (REGULAR_WORD.test(name) || !name) { 
        name = prompt('Как тебя зовут?', name);
        сheckUserName(name);
    } else {
        return name;
    };
};

сheckUserName(name);


const age = prompt('Сколько тебе лет?');
const REGULAR_NUMBER = /\D/g;

const сheckUserAge = function(age) {
    if (REGULAR_NUMBER.test(age)) {
        age = prompt('Сколько тебе лет?', age);
        сheckUserAge(age);
    } else {
        return age;
    };
};

сheckUserAge(age);


if (age < 18) {
    alert('You are not allowed to visit this website');
} else if (age >= 18 && age <= 22) {
    let result = confirm('Are you sure you want to continue?');
    if (!!result) {
        alert(`Welcome ${name}`);
    } else {
        alert('You are not allowed to visit this website');
    };
} else {
    alert(`Welcome ${name}`);
};

