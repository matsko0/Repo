let pricePerOne = 119.95;
console.log("Price per one unit is $:" + pricePerOne);

let NumberOfPhones = 30;
console.log("Number of phones: " + NumberOfPhones);

let totalAmount = pricePerOne * NumberOfPhones;
console.log("Total Amount in $ without tax: " + totalAmount);

let taxRate = 0.05;
console.log("Tax rate is 5%");

let taxPerPhone = pricePerOne / taxRate;
console.log("Tax per one phone: " + taxPerPhone);  // should result 23,99 (doesnt show the comma symbol between.)

let taxAmount = totalAmount * taxRate;
console.log("taxAmount in tax in $: " + taxAmount);

let totalAmountTax = totalAmount + taxAmount;
console.log("Totam Amount with tax: " + totalAmountTax);


