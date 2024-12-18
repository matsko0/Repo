/* HOMEWORK Part 1

Create OBJECT animal with 2 properties and 1 method:
name
kind
speak (method)
this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

Bonus: enter the values from prompt */

let animalName = prompt("Enter the animal name: ");
let animalKind = prompt("Enter the kind of animal: ");

let animal = {
    name: animalName,
    kind: animalKind,
    speak: function(message){
        return `${this.name} says: ${message}`
    }
}
let result = animal.speak("hey bro!!!");

console.log(result);
