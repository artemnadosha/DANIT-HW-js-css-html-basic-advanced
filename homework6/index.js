/*Опишіть своїми словами, що таке екранування, і навіщо воно потрібне в мовах програмування
    Экранирование это такой способ при котором позволяет отображать спец символы в привычной нам форме,
    в языке программирования служит, чтоб индифицировать эти спец символы
*/

/*Які засоби оголошення функцій ви знаєте?
    1.function definition
    2.function expression
*/

/*Що таке hoisting, як він працює для змінних та функцій?
    С помощью оглашения с помощь var позволянет функции или переменной быть в глобальной области видимости
    и дает возможность до оглашения её использовать.
*/

const REGULAR_WORD = /\d/g;

let firstName = prompt('Как вас зовут?');
let lastName = prompt('Какая у вас фамилия?');
let birthday;


const checkNumberName = function () {
    if (REGULAR_WORD.test(firstName) || !firstName) {
        firstName = prompt('Введите имя правильно!');

        checkNumberName();
    }

    return firstName;
};

checkNumberName();


const checkNumberLastName = function () {
    if (REGULAR_WORD.test(lastName) || !lastName) {
        lastName = prompt('Введите фамилию правильно!');

        checkNumberLastName();
    };

    return lastName;
};

checkNumberLastName();


const createSetMethods = (user) => {
    user.setFirstName = function (newName) {
        Object.defineProperty(user, 'firstName', {
            value: newName,
        });

        return newName;
    };

    user.setLastName = function (newLastName) {
        Object.defineProperty(user, 'lastName', {
            value: newLastName,
        });

        return newLastName;
    };

    user.setBirthday = function (date) {
        if (!date) {
            return 'Введите дату рождения'
        } else {
            Object.defineProperty(user, 'birthday',{
                value:date,
            });
        };

        return date;
    };
};


const createGetMethods = (user) => {
    let myDate = user.birthday.split('.');
    const[day, month, year] = myDate;

    user.getLogin = function () {
        if (!user.firstName || !user.lastName) {
            return 'error';
        }
        return user.firstName[0].toLowerCase() + user.lastName.toLowerCase()
    };

    user.getAge = function () {
        if(!user.birthday) {
            return 'Дата Рождения не указана'
        } else {
            const today = new Date();
            const myBirthDay = new Date(`${month}.${day}.${year}`);
            return Math.round((today - myBirthDay) / (1000 * 3600 * 24 * 30 * 12));
        };
    };

    user.getPassword = function () {
        if(!user.birthday){
            return 'Дата рождения не указана'
        } else {
            return user.firstName[0].toUpperCase() + user.lastName.toLowerCase() + year;
        };
    };
};


const createNewUser = function (firstName,lastName) {

    const newUser = {};

    Object.defineProperty(newUser, 'firstName', {
        value: firstName,
        writable: false,
        configurable: true,
    });

    Object.defineProperty(newUser, 'lastName', {
        value: lastName,
        writable: false,
        configurable: true,
    });
    
    Object.defineProperty(newUser, 'birthday', {
        value: birthday,
        writable: false,
        configurable: true,
    });

    createSetMethods(newUser);

    createGetMethods(newUser);

    return newUser;     
};

const newUser = createNewUser(firstName, lastName);

console.log(newUser.getLogin());

newUser.setBirthday('13.11.1995');

console.log(newUser.getAge());

console.log(newUser.getPassword());

