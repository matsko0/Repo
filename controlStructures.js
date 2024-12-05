//if-else

let condition = 5 > 2;

if(condition){
    //the code we write here will be executed if the condition is true
    //this will be executed
}else{
    //the code we write here will be executed if the condition is false
    //this will be executed
}

let falseCondition = 5 < 2; //false

if(falseCondition){
      //the code we write here will be executed if the condition is true
    //this will be executed
}else{
    //the code we write here will be executed if the condition is false
    //this will be executed
}


//Example
let points = 51;

if(points > 60){
    console.log("Congrats, you passed!");
}else{
    console.log("Sorry, you failed:( ")
}


//Example2
let scoredpoints = 89



//Excercise

let string = prompt("How much money do you have?");  //money is string
let money = parseInt(string);

if(money>500){
    console.log("You have planty of money! Buy something for yourself.")
}

else if(money<=500 && money >=400){
    console.log("consider buying some food");
}else{
    console.log("consider saving some money");
}



