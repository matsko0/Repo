let result = 2 / "test";
console.log(result); //NaN

console.log("Type of result: ");
console.log(typeof(NaN)); //number


let res1 = isNaN(result); //if the result is a number
console.log(res1); //true -> NaN is a number.


let text = "test";
let resultText = isNaN(text);
console.log(resultText); //true because the string is Not a number

let number = 7;
let resultNumber = isNaN(number);
console.log(resultNumber); //false -> number is a number, so it is not true that number is not a number (double nogation);

//Infinities


let c = Infinity;
let d = -Infinity;

let divideWithZero = 5/0; //Infinity

console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(divideWithZero));