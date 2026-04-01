// console.log("Main.js loaded successfully!");
const validPin = 1234;
// add money functionality
document.getElementById("add-money-btn").addEventListener("click", function(event) {
    // console.log("Add Money button clicked");
    event.preventDefault(); // Prevent form submission

    const bank = document.getElementById("bank").value;

    const amountNumber = document.getElementById("account-number").value;

    const amount = parseInt(document.getElementById("add-amount").value);

    const pin = parseInt(document.getElementById("pin").value);

    // console.log("Selected Bank:", bank);
    // console.log("Account Number:", amountNumber);
    // console.log("Amount:", amount);
    // console.log("Pin:", pin);

    const availableBalanceElement = parseInt(document.getElementById("available-balance").innerText);
    // console.log("Available Balance:", availableBalanceElement);

    if (amountNumber.length !== 11) {
        alert("Please enter a valid 11-digit bank account number.");
        return;
    }

    if (pin !== validPin) {
        alert("Invalid pin. Please enter the correct pin.");
        return;
    }


    const totalBalance = availableBalanceElement + amount;
    // console.log("Total Balance:", totalBalance);
    document.getElementById("available-balance").innerText = totalBalance;

})




// cash out functionality
const agentNumber = 12345678900;

document.getElementById("withdraw-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    // console.log("Withdraw button clicked");

    const amount = parseInt(document.getElementById("withdraw-amount").value);

    const availableBalanceElement = parseInt(document.getElementById("available-balance").innerText);
    // console.log("Available Balance:", availableBalanceElement);

    const agentNumber = document.getElementById("withdraw-agent").value;

    const pin = parseInt(document.getElementById("withdraw-pin").value);

    if (pin !== validPin) {
        alert("Invalid pin. Please enter the correct pin.");
        return;
    }
    if (agentNumber.length !== 11) {
        alert("Please enter a valid 11-digit agent number.");
        return;
    }

    const totalBalance = availableBalanceElement - amount;
    // console.log("Total Balance:", totalBalance);

    document.getElementById("available-balance").innerText = totalBalance;
})




//togling futere forms
document.getElementById("add-button").addEventListener("click", function() {
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("add-money-parent").style.display = "block";
})

document.getElementById("cash-out-button").addEventListener("click", function() {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "block";
})