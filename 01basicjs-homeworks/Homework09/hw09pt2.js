/* HOMEWORK Part 2
Create a header generator

Create two inputs, one for text and one for color

Create a button that says: generate h1

When the button is clicked create a new header below the inputs and button

The new header should have the text and color from the inputs

Additionally create an h3 element for messages

If the person enters an invalid color or an empty text show an error message in the h3 element */

$(document).ready(function() {

    function isValidColor(color) {
        let div = $("<div></div>");
        div.css("color", color);
        return div.css("color");
    }

    $("#generateBtn").click(function(){

        let text = $("#headerText").val().trim();
        let color = $("#headerColor").val().trim();
    
        if (!text){
            $("#message").text("Error: Text input cannot be empty!").addClass("error");
            return;
        }

        if (!isValidColor(color)){
            $("#message").text("Error: invalid color input!").addClass("error");
            return;
        }
    
        let newHeader = $("<h1></h1>").text(text).css("color", color);

        $("#headerContainer").append(newHeader);

        
    });
 
  


});