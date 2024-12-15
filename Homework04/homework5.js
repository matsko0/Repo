/*Homework #5
Title: Looping structures

Description: Write a JavaScript function that will return:
The sum of the MAX and MIN numbers from an array with numbers
Ex: arr = [3, 5, 6, 8, 11]
Output: Max: 11, Min: 3, Sum: 14

Bonus: Try making the function work if there are other types of items in it*/

let funk = [3, 5, 6, 8, 11];

function returnSum(inputArray){
let minValue = inputArray[0];
let maxValue = inputArray[0];

    for(i = 0; i < inputArray.length; i++){
        if(inputArray[i] > maxValue){
            maxValue = inputArray[i]
        } 
        if(inputArray[i] < minValue){
            minValue = inputArray[i]
        }
        }  
        console.log(`min value is ${minValue}`);
        console.log(`max value is ${maxValue}`);
        
        
        return minValue + maxValue;
}

let result = returnSum(funk);
console.log(`sum of min and max: ${result}`);
