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

const createNewUser = function () {
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

    newUser.getLogin = function () {
        if (!this.firstName || !this.lastName) {
            return 'error';
        }
            return this.firstName.slice(0, 1).toLowerCase() + this.lastName.toLowerCase()
        };
    
    newUser.getAge = function () {
        if(!this.birthday) {
            return 'Дата Рождения не указана'
        } else {
            let myDate = this.birthday.split('.');
            const[day, month, year] = myDate;
            
            const today = new Date();
            const myBirthDay = new Date(`${month}.${day}.${year}`);
            const age = Math.round((today - myBirthDay) / (1000 * 3600 * 24 * 30 * 12)); 
        
            return age;
        };
    };

    newUser.getPassword = function () {
        if(!this.birthday){
            return 'Дата рождения не указана'
        } else {
            let myDate = this.birthday.split('.');
            const[day, month, year] = myDate;
            const password = this.firstName[0].toUpperCase() + this.lastName.toLowerCase() + year;
            
            return password; 
        };
    };

    newUser.setFirstName = function (newName) {
        Object.defineProperty(newUser, 'firstName', {
            value: newName,
        });
    };
    
    newUser.setLastName = function (newLastName) {
        Object.defineProperty(newUser, 'lastName', {
            value: newLastName,
        });
    };

    newUser.setBirthday = function (date) {
        if (!date) {
            return 'Введите дату рождения'
        } else {
            Object.defineProperty(newUser, 'birthday',{
                value:date,
            });
        };

        return date;
    };

    return newUser;     
};

const newUser = createNewUser();

console.log(newUser.getLogin());

newUser.setBirthday('13.11.1995');

console.log(newUser.getAge());

console.log(newUser.getPassword());

