/*HOMEWORK Part 2
Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.

Already read 'The Robots of dawn' by Isaac Asimov. (if true)
You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
Bonus: enter the values from prompt()*/

let promptTitle = prompt("Enter the title of the book");
let promptAuthor = prompt("Enter the Author of the book");
let promptReadingStatus = prompt("Have you read it ? (yes/no)");

let readingStatus;
if (promptReadingStatus === "yes" || promptReadingStatus === "YES"){
    readingStatus = true;
} else if (promptReadingStatus === "no" || promptReadingStatus === "NO"){
    readingStatus = false;
} else {
    throw new Error("Invalid input. Please enter 'yes' or 'no'.");
}

let book = {
    title: promptTitle,
    author: promptAuthor,
    readingStatus: readingStatus,
    bookReadingStatus: function() {
        if (this.readingStatus){
            return `Nice that you have already read ${this.title} by ${this.author} now get some another book!`
        } else {
            return `You still need to read ${this.title} by ${this.author}`
        }
    } 

}

let resultMessage = book.bookReadingStatus();
console.log(resultMessage);
