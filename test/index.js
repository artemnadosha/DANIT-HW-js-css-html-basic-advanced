const app = document.querySelector('.app');
const result = app.querySelector('.result');
const number = app.querySelectorAll('.number')


number.forEach(item => item.addEventListener ('click',e => {
    result.value += e.target.textContent;
    if (e.target.textContent === '=') {
        checkLitter(result.value);
    };

}));

const checkLitter = (arg) => {
    arg = arg.slice(0, arg.length -1);
    if(!/\d/g.test(arg)){
        return result.value = 'Введи число';
    } else {
        resultCalc(result.value);
    };
};

const resultCalc = (myResult) => {
    let newResult;
    myResult = myResult.slice(0, myResult.length -1)

    if(!isNaN(myResult)){
        return result.value = myResult;
    };

    if(myResult.includes('+') ){
        myResult = myResult.split('+');
        myResult = myResult.map(e => parseInt(e));
        myResult.forEach(e => {
            newResult = myResult[0]
            newResult += e
        });
    } else if (myResult.includes('-') && !myResult.includes('*') || !myResult.includes('/')) {
        myResult = myResult.split('-');
        myResult = myResult.map(e => parseInt(e));
        myResult.forEach(e => {
            newResult = myResult[0]
            newResult -= e
        });
    } else if (myResult.includes('*')) {
        myResult = myResult.split('*');
        myResult = myResult.map(e => parseInt(e));
        myResult.forEach(e => {
            newResult = myResult[0]
            newResult *= e
        });
    } else if (myResult.includes('/')) {
        myResult = myResult.split('/');
        myResult = myResult.map(e => parseInt(e));
        myResult.forEach(e => {
            newResult = myResult[0]
            newResult /= e
        });
    } else {
        newResult = myResult;
    };

    result.value = newResult;
};

