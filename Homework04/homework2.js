/* HOMEWORK #2
Write a function that will take an array of 5 numbers as an argument and return the sum.

Print it in the console or in alert

BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every nmber.u If one of the numbers of the array is invalid show an error message instead of a result. */

let arrayNum = [3, 783, 14, 27, "a", 33];

function sumNum(numbers){
    let sum = 0
    for (let i = sum; i < numbers.length; i++){
        if (validateNumbers(numbers[i])){
            sum += numbers[i];
        } 
    }
    return sum;
}
let arraySum = sumNum(arrayNum);
console.log(arraySum);


function validateNumbers(number){
    if (typeof(number) === "number"){
     return true;
     } else {
        console.log(`${number} is not a number \n`);
        return false;
     }
}
    


