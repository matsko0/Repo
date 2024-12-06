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
