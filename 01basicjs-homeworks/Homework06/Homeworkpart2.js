/* HOMEWORK Part 2
Print all numbers from an array and the sum

Create an array with numbers

Print all numbers from the array in a list element, in the HTML page

Print out the sum of all of the numbers below the list


Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11) */

let array = [2, 4, 5, 8, 15];

let testArray = [10, 20, 30, 40, 50, 66];

function printNumbersAndSum(numbers){
    let sum = 0;
    let equasion = '';
    let listHTML = '<ul>';

    for(i = 0; i < numbers.length; i++){
        sum += numbers[i];
        equasion += numbers[i];
        listHTML += `<li>${numbers[i]}</li>`
    if(i < numbers.length -1){
        equasion += ' + ';
    }
}
    equasion += ' = ' + sum;
    listHTML += '</ul>'
    document.body.innerHTML += listHTML;
    document.body.innerHTML += `<p>${equasion}</p>`;
}

printNumbersAndSum(array);
printNumbersAndSum(testArray);