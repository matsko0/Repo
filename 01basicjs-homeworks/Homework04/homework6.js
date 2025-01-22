/*         Title: Looping structures

Description:Write a javascript function that:
When given 2 arrays of students firstNames and lastNames will return a new array with students full names
Every name should have a numeric value before it
Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]      */


function combineStudentNames(firstNames, lastNames){
    let fullNames = [];

    if(firstNames.length !== lastNames.length){

    throw new Error('invalid input length of names should be the same'); //googled

    }
    for(let i = 0; i <= 1; i++){
        fullNames.push(`${i + 1}. ${firstNames[i]} , ${lastNames[i]}`);
    }
    return fullNames;

}

let first = ["Bob", "Jill", ];
let last = ["Gregory", "Wurtz", ];

let result = combineStudentNames(first, last);
console.log(result);
