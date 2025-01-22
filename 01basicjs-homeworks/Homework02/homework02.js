/* HOMEWORK
Write javascript code that will get an input from the user and calculate which Chinese Zodiac a given year is in

Formula for Chinese Zodiac caluclation: (year - 4) % 12. Possible values:

0 - Rat
1 - Ox
2 - Tiger
3 - Rabbit
4 - Dragon
5 - Snake
6 - Horse
7 - Goat
8 - Monkey
9 - Rooster
10 - Dog
11 - Pig */


/* ========================= VOL01 ======================== 
let string = prompt("Please enter your birth date: ");
let year = parseInt(string);

if (isNaN(year)) {
    alert("Invalid input (please enter a valid number:");
} else {
    let zodiacCalc = (year - 4) % 12;
    let zodiac;

    if (zodiacCalc == 0) {
        zodiac = "0.Rat";
    } else if (zodiacCalc == 1) {
        zodiac = "1.Ox";
    } else if (zodiacCalc == 2) {
        zodiac = "2.Tiger";
    } else if (zodiacCalc == 3) {
        zodiac = "3.Rabbit";
    } else if (zodiacCalc == 4) {
        zodiac = "4.Dragon";
    } else if (zodiacCalc == 5) {
        zodiac = "5.Snake";
    } else if (zodiacCalc == 6) {
        zodiac = "6.Horse";
    } else if (zodiacCalc == 7) {
        zodiac = "7.Goat"
    } else if (zodiacCalc == 8) {
        zodiac = "8.Monkey"
    } else if (zodiacCalc == 9) {
        zodiac = "9.Rooster"
    } else if (zodiacCalc == 10) {
        zodiac = "10.Dog"
    } else if (zodiacCalc == 11) {
        zodiac = "11.Pig"
    }

    console.log("Your Chinese zodiac sign is number:" + zodiac);
}
    
 /* ================================= VOL02 =========================== */

let string = prompt("Please enter your year of birth: ")
let year = parseInt(string);

let zodiacSigns = [ 
    "0.Rat", "1.Ox", "2.Tiger", "3.Rabbit", "4.Dragon", "5.Snake", "6.Horse", "7.Goat", "8.Monkey", "9.Rooster", "10.Dog", "11.Pig"
]

if (isNaN(year)) {
    alert("Invalid input. Please enter a valid number of your birth date.")
} else {
    let zodiacCalc = (year - 4) %12;
    let zodiac = zodiacSigns[zodiacCalc]

    console.log("Your Chinese zodiac sign is number:" + zodiac);
    
}
