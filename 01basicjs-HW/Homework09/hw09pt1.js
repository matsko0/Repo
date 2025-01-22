/*  HOMEWORK Part 1

Create a greeting app with JQuery
Create an input
Create a button
When clicked the button should print a greet message in an 

h1 header // changed with h2

Ex: input: Petko output message: Hello there Petko!
 */

$(document).ready(function(){

    $("#greetingButton").click(function(){

        let name = $("#nameInput").val().trim();
        if (name) {
            $("#greetingMessage").text(`Hello there ${name} !`);
        } else {
            $("#greetingMessage").text("Please enter your name!")
        }


    });

});