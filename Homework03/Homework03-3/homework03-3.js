/* HOMEWORK Part 3
Write a javascript function for an ATM:
The ATM should give cash
Should return "Not enough money" if you request more money
Should return the ammount withdrawn and money left on the account if you have enough
Note: Hardcode your account money in the program
Bonus: Make it work with prompt()! */


let accountBalace = 2000;

function atmMoneyWithdrawal() {
    let inputMoney = prompt (`Enter Withdrawal money amount Your total balance is ${accountBalace}` )
    let withdrawalAmount = parseFloat(inputMoney);

    if (isNaN(withdrawalAmount) || withdrawalAmount <= 0) {
        alert("Invalid input:");
        return;
    } if (withdrawalAmount > accountBalace) {
        alert(`Not sufficient funds! your account balance is ${accountBalace}`);
    } else {
    accountBalace -= withdrawalAmount;
    alert(`You take out ${withdrawalAmount} and your remaining balance is ${accountBalace}`)
    }
}

let userChoice = prompt ("enter 1 to withdraw and 2 to check your balance 3 to exit");
if (isNaN(userChoice) || userChoice < 1 || userChoice > 3) {
    alert(`invalid choice please enter numbers between 1,2,3`);
}
if (userChoice == "1") {
    atmMoneyWithdrawal(); 
} else if (userChoice == "2") {
    alert(`Your account balance is ${accountBalace}`)
} else if (userChoice == "3") {
    alert("good bye!");
} 
