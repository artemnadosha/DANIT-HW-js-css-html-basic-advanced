let numberOne = +prompt('Введите первое число');

const checkNumberOne  = function(numberOne) {
    if (isNaN(numberOne)) {
        numberOne = +prompt('Введите первое число правильно');
        checkNumberOne(numberOne);
    } else {
        return numberOne;
    };
};

checkNumberOne(numberOne);


let numberTwo = +prompt('Введите второе число');

const checkNumberTwo  = function(numberTwo, numberOne) {
    if (isNaN(numberTwo)) {
        numberTwo = +prompt('Введите второе число правильно');
        checkNumberTwo(numberTwo);
    } else if (numberTwo < numberOne) {
        numberTwo = +prompt('Введите второе число больше чем первое');
        checkNumberTwo(numberTwo);
    } else {
        return numberTwo;
    };
}; 

checkNumberTwo(numberTwo);


if (numberOne < 2) {
    numberOne = 2;
};


start:
for (let i = numberOne; i <= numberTwo; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            continue start;   
        };
    };
    console.log(i);
};