/* HOMEWORK Part 2
Write a JavaScript function that will return:

Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
Note: Call the function in console to see answer
Bonus: Make the same function work for converting dog to human years as well */



let string = prompt("Please enter your age to convert it to DOG&HUMAN years : ")
let year = parseInt(string);

function calculateAge(age) {
    if(isNaN(year) || year <= 0) {
        alert("Invalid input enter a valid number:");
    } else {
        let humanToDog = age * 7;
        let dogToHuman = age / 7;
        dogToHuman = dogToHuman.toFixed(2);
        console.log(`The same amount of year in Human to dog is ${humanToDog} & and the same amount of years human years is ${dogToHuman}`);
        alert(`This age in Dog years would be ${humanToDog} and the same age to human years ${dogToHuman}`);
        
    }
}
calculateAge(year);


