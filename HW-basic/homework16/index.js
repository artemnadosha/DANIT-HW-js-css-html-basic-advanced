
const userNumber = document.querySelector('#userNumber');
const result = document.querySelector('.result');

const fibonacciNumbers = (userNumber) => {
    let numberOne = 0;
    let numberTwo = 1;
    let result;

    if(userNumber === 0) {
        return 0;
    };
    if(userNumber === 1) {
        return 1;
    };
    if(userNumber === -1) {
        return -1;
    };

    if(userNumber > 0) {
        for (let i = 2; i <= userNumber; i++) {
            result = numberOne + numberTwo;
            numberOne = numberTwo;
            numberTwo = result;

        };
    } else {
        for (let i = -2; i >= userNumber; i--) {
            result = numberOne - numberTwo;
            numberOne = numberTwo;
            numberTwo = result;
        };
    };
        return result;
    };

userNumber.oninput = () => {
        result.innerText = fibonacciNumbers(+userNumber.value);
};



