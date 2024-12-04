let pricePerOne = 119.95;
console.log("Price per one unit in $:");
console.log(pricePerOne);

let NumberOfPhones = 30;
console.log("Number of phones:");
console.log(NumberOfPhones);

let totalAmount = pricePerOne * NumberOfPhones;
console.log("Total Amount in $ without tax:");
console.log(totalAmount);

let taxRate = 0.05;
console.log("Tax rate is 5%");

let taxPerPhone = pricePerOne / taxRate;
console.log("Tax per one phone: ");  // should result 23,99 (doesnt show the comma symbol between.)
console.log(taxPerPhone);

let taxAmount = totalAmount * taxRate;
console.log("taxAmount in tax in $:");
console.log(taxAmount);

let totalAmountTax = totalAmount + taxAmount;
console.log("Totam Amount with tax:");
console.log(totalAmountTax);


