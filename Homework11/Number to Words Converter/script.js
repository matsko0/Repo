
document.getElementById("numberInput").addEventListener("input", function () {
    const inputValue = parseInt(this.value);
    const output = document.getElementById("output");

    output.value = numberToWords(inputValue);
});


function numberToWords(num){

    if (num < 0 || num > 1000000 || isNaN(num)){
        return "Please enter a valid number 0 till 100000"
    };

    const belowTwenty = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    if (num === 0){
        return "zero";
    }
    if (num === 1000000){
        return "one million";
    }

    let result = "";

    if (num >= 1000) {
        let thousands = Math.floor(num / 1000);
        if (thousands < 20) {
            result += belowTwenty[thousands];
        } else {
            result += tens[Math.floor(thousands / 10)];
            if (thousands % 10 > 0) {
                result += "-" + belowTwenty[thousands % 10];
            }
        }
        result += " thousand";
        num %= 1000; 
        if (num > 0) {
            result += " ";
        }
    }
    
    if (num >= 100){
        let hundreds = Math.floor(num / 100);
        result += belowTwenty[hundreds] + " hundred";
        num %= 100;
        if (num > 0) {
            result += " and ";
        }        
    };

    if (num > 0){
        if (num < 20){
            result += belowTwenty[num];
        } else {
            result += tens[Math.floor(num / 10)]
            if(num % 10 > 0){
                result += "-" + belowTwenty[num % 10]
            }
        }
    };
    
    return result;
};


