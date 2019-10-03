function eval() {
    // Do not use eval!!!
    return;
}


function plus(calcValue){
    let result = 0;
    str = calcValue.split("+");
    let number = str.map(strToNum => minus(strToNum));
    result = number.reduce((acc, corrValue) => acc + corrValue, 0);
    return(result);
}
function minus(calcValue){
    let result = 0;
    str = calcValue.split("-");
    let number = str.map(strToNum => multi(strToNum));
    let inicialValue = number[0];
    result = number.slice(1).reduce((acc, corrValue) => acc - corrValue, inicialValue);
    return(result);
}
function multi(calcValue){
    let result = 0;
    str = calcValue.split("*");
    let number = str.map(strToNum => div(strToNum));
    let inicialValue = 1.0;
    result = number.reduce((acc, corrValue) => acc * corrValue, inicialValue);
    return(result);
}

function div(calcValue){
    let result = 0;
    str = calcValue.split("/");
    let number = str.map(strToNum => +strToNum);
    let err = 'TypeError: Devision by zero.';
    result = number.reduce(function (acc, corrValue) {
        if (corrValue == 0)
        return err;
        else
        return (acc / corrValue);
     //   (corrValue == 0) ?  err :(acc / corrValue)
    })
  //  ((acc, corrValue ) => acc / corrValue);
    return(result);
}

function expressionCalculator(expr) {
    // write your solution here
str = expr.replace(/\s/g, '');
console.log(str);
return(plus(str));
}

module.exports = {
    expressionCalculator
}