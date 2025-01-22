/*   HOMEWORK #3
Write a javascript function that:
When given any array of strings (should work with array with any number of elements)
It will create one big string and return it
Ex:["Hello", "there", "students", "of", "SEDC", "!"]
Result: "Hello there students of SEDC!" */

exampleArray = ["Hello", "there", "students", "of", "SEDC", "!"]

function concatenateText(stringsArray){
    let result = "";
    for (let i = 0; i < stringsArray.length; i++){

    result += stringsArray[i];

    if (i < stringsArray.length){ 
    result += " ";
    }
    }
    return result;
}


console.log(concatenateText(exampleArray));
