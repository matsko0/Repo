const display = document.getElementById("display");

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value
        if (value === undefined){
            return;
        };
        if (value === '='){
            calculateResult();
        } else if (value === 'clear'){
            display.value = '';
        } else if (value === '←'){
            display.value = display.value.slice(0, -1);
        } else {
            display.value += value;
        };
    });
});

function calculateResult() {
    let expression = display.value;
    if(!expression){
        display.value = 'Error';
        return;
    };

    let result = evaluateExpression(expression);

    if(isNaN(result)){
        display.value = 'Error';
    }else{
        display.value = result;
    };

};


function evaluateExpression(expression) { 

    let numbers = [];
    let operators = [];
    let currentNumber = "";

    for (let char of expression){
        if(!isNaN(char) || char === '.'){
            currentNumber += char;
        } else if(['+', '-', '*', '/'].includes(char)){
            if(currentNumber === ""){
                return NaN;
            }
            numbers.push(parseFloat(currentNumber));
            operators.push(char);
            currentNumber = "";
        } else {
            return NaN;
        };
    };

    if (currentNumber !== ""){
        numbers.push(parseFloat(currentNumber));
    } else {
        return NaN;
    };


    let result = numbers[0];
    for(let i = 0; i < operators.length; i++){
        let operator = operators[i];
        let nextValue = numbers[i + 1];

        if(isNaN(nextValue)){
            return NaN;
        };

        switch(operator){
            case '+':
                result += nextValue;
                break;
            case '-':
                result -= nextValue;
                break;
            case '*':
                result *= nextValue;
                break;
            case '/':
                if (nextValue === 0) return NaN;
                result /= nextValue;
                break;
            default:
                return NaN;
        };
    };
    return result;
};