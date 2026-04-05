// console.log("Main.js loaded successfully!");



// input value get function
function getInputValue(id) {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    return inputValue;
}

// get input as number
function getInputNumber(id) {
    const inputField = document.getElementById(id);
    const inputValue = parseInt(inputField.value);
    return inputValue;
}


// inner text get function
function getInnerText(id) {
    const element = document.getElementById(id);
    const elementValue = parseInt(element.innerText);
    return elementValue;
}





const validPin = 1234;
// add money functionality
document.getElementById("add-money-btn").addEventListener("click", function(event) {
    // console.log("Add Money button clicked");
    event.preventDefault(); // Prevent form submission

    const bank = document.getElementById("bank").value;

    const amountNumber = document.getElementById("account-number").value;

    const amount = getInputNumber("add-amount");

    const pin = getInputNumber("pin");


    const availableBalanceElement = getInnerText("available-balance");
    // console.log("Available Balance:", availableBalanceElement);

    if (amountNumber.length !== 11) {
        alert("Please enter a valid 11-digit bank account number.");
        return;
    }

    if (amount <= 0 || isNaN(amount)) {
        alert("Please enter a valid amount.");
        return;
    }

    if (pin !== validPin) {
        alert("Invalid pin. Please enter the correct pin.");
        return;
    }


    const totalBalance = availableBalanceElement + amount;
    // console.log("Total Balance:", totalBalance);
    document.getElementById("available-balance").innerText = totalBalance;
    alert("Money added successfully!");

    // Add transaction
    addTransaction("Add Money", amount, "Bank: " + bank);

    // Reset form
    document.getElementById("account-number").value = "";
    document.getElementById("add-amount").value = "";
    document.getElementById("pin").value = "";

})




// cash out functionality
document.getElementById("withdraw-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    // console.log("Withdraw button clicked");

    const amount = getInputNumber("withdraw-amount");

    const availableBalanceElement = getInnerText("available-balance");
    // console.log("Available Balance:", availableBalanceElement);

    const agentNumber = document.getElementById("withdraw-agent").value;

    const pin = getInputNumber("withdraw-pin");

    if (pin !== validPin) {
        alert("Invalid pin. Please enter the correct pin.");
        return;
    }
    if (agentNumber.length !== 11) {
        alert("Please enter a valid 11-digit agent number.");
        return;
    }

    if (amount <= 0 || isNaN(amount)) {
        alert("Please enter a valid amount.");
        return;
    }

    if (amount > availableBalanceElement) {
        alert("Insufficient balance. Please enter a valid amount.");
        return;
    }

    const totalBalance = availableBalanceElement - amount;
    // console.log("Total Balance:", totalBalance);

    document.getElementById("available-balance").innerText = totalBalance;
    alert("Cashout successful!");

    // Add transaction
    addTransaction("Cash Out", amount, "Agent: " + agentNumber);

    // Reset form
    document.getElementById("withdraw-agent").value = "";
    document.getElementById("withdraw-amount").value = "";
    document.getElementById("withdraw-pin").value = "";
})


// Toggle form visibility
document.getElementById("add-button").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("add-money-parent").style.display = "block";
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("transfer-money-parent").style.display = "none";
    document.getElementById("get-bonus-parent").style.display = "none";
    document.getElementById("pay-bill-parent").style.display = "none";
    document.getElementById("transactions-parent").style.display = "none";
})

document.getElementById("cash-out-button").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "block";
    document.getElementById("transfer-money-parent").style.display = "none";
    document.getElementById("get-bonus-parent").style.display = "none";
    document.getElementById("pay-bill-parent").style.display = "none";
    document.getElementById("transactions-parent").style.display = "none";
})

document.getElementById("transfer-button").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("transfer-money-parent").style.display = "block";
    document.getElementById("get-bonus-parent").style.display = "none";
    document.getElementById("pay-bill-parent").style.display = "none";
    document.getElementById("transactions-parent").style.display = "none";
})

document.getElementById("get-bonus-button").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("transfer-money-parent").style.display = "none";
    document.getElementById("get-bonus-parent").style.display = "block";
    document.getElementById("pay-bill-parent").style.display = "none";
    document.getElementById("transactions-parent").style.display = "none";
})

document.getElementById("pay-bill-button").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("transfer-money-parent").style.display = "none";
    document.getElementById("get-bonus-parent").style.display = "none";
    document.getElementById("pay-bill-parent").style.display = "block";
    document.getElementById("transactions-parent").style.display = "none";
})

document.getElementById("transactions-button").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("transfer-money-parent").style.display = "none";
    document.getElementById("get-bonus-parent").style.display = "none";
    document.getElementById("pay-bill-parent").style.display = "none";
    document.getElementById("transactions-parent").style.display = "block";

    // Display transactions
    displayTransactions();
})

// Transfer money functionality
document.getElementById("transfer-submit-btn").addEventListener("click", function(event) {
    event.preventDefault();

    const recipientNumber = document.getElementById("recipient-number").value;
    const amount = getInputNumber("transfer-amount");
    const pin = getInputNumber("transfer-pin");
    const availableBalanceElement = getInnerText("available-balance");

    if (recipientNumber.length !== 11) {
        alert("Please enter a valid 11-digit recipient number.");
        return;
    }

    if (amount <= 0 || isNaN(amount)) {
        alert("Please enter a valid amount.");
        return;
    }

    if (pin !== validPin) {
        alert("Invalid pin. Please enter the correct pin.");
        return;
    }

    if (amount > availableBalanceElement) {
        alert("Insufficient balance. Please enter a valid amount.");
        return;
    }

    const totalBalance = availableBalanceElement - amount;
    document.getElementById("available-balance").innerText = totalBalance;
    alert("Transfer successful! Amount transferred to " + recipientNumber);

    // Add transaction
    addTransaction("Transfer", amount, "Recipient: " + recipientNumber);

    // Reset form
    document.getElementById("transfer-amount").value = "";
    document.getElementById("transfer-pin").value = "";
    document.getElementById("recipient-number").value = "";
})

// Get Bonus functionality
const validBonusCodes = {
    "BONUS100": 100,
    "BONUS200": 200,
    "BONUS500": 500,
    "WELCOME": 50
};

document.getElementById("get-bonus-btn").addEventListener("click", function(event) {
    event.preventDefault();

    const bonusCode = document.getElementById("bonus-code").value.toUpperCase();
    const availableBalanceElement = getInnerText("available-balance");

    if (bonusCode === "") {
        alert("Please enter a bonus code.");
        return;
    }

    if (!(bonusCode in validBonusCodes)) {
        alert("Invalid bonus code. Please enter a valid code.");
        return;
    }

    const bonusAmount = validBonusCodes[bonusCode];
    const totalBalance = availableBalanceElement + bonusAmount;

    document.getElementById("available-balance").innerText = totalBalance;
    alert("Bonus applied successfully! You received $" + bonusAmount + " bonus.");

    // Reset form
    document.getElementById("bonus-code").value = "";
})

// Pay Bill functionality
document.getElementById("pay-bill-btn").addEventListener("click", function(event) {
    event.preventDefault();

    const billType = document.getElementById("bill-type").value;
    const billAccount = document.getElementById("bill-account").value;
    const billAmount = getInputNumber("bill-amount");
    const billPin = getInputNumber("bill-pin");
    const availableBalanceElement = getInnerText("available-balance");

    if (billType === "Select Bill Type") {
        alert("Please select a bill type.");
        return;
    }

    if (billAccount === "") {
        alert("Please enter an account number.");
        return;
    }

    if (billAmount <= 0 || isNaN(billAmount)) {
        alert("Please enter a valid amount.");
        return;
    }

    if (billPin !== validPin) {
        alert("Invalid pin. Please enter the correct pin.");
        return;
    }

    if (billAmount > availableBalanceElement) {
        alert("Insufficient balance. Please enter a valid amount.");
        return;
    }

    const totalBalance = availableBalanceElement - billAmount;
    document.getElementById("available-balance").innerText = totalBalance;
    alert("Bill payment successful! $" + billAmount + " paid for " + billType);

    // Add transaction
    addTransaction("Pay Bill (" + billType + ")", billAmount, "Account: " + billAccount);

    // Reset form
    document.getElementById("bill-type").value = "Select Bill Type";
    document.getElementById("bill-account").value = "";
    document.getElementById("bill-amount").value = "";
    document.getElementById("bill-pin").value = "";
})

// Transaction history array
let transactionHistory = [];

// Function to add transaction
function addTransaction(type, amount, recipient) {
    const date = new Date().toLocaleString();
    transactionHistory.push({
        type: type,
        amount: amount,
        recipient: recipient,
        date: date
    });
}

// Function to display transactions
function displayTransactions() {
    const transactionsParent = document.getElementById("transactions-parent");
    let transactionHTML = '<h1 class="text-2xl font-bold mb-4">Transactions</h1>';

    if (transactionHistory.length === 0) {
        transactionHTML += '<p class="text-gray-500">No transactions yet.</p>';
    } else {
        transactionHTML += '<div class="bg-white rounded-2xl p-4">';
        for (let i = transactionHistory.length - 1; i >= 0; i--) {
            const trans = transactionHistory[i];
            transactionHTML += `
                <div class="border-b py-3">
                    <div class="flex justify-between items-center">
                        <div>
                            <p class="font-semibold">${trans.type}</p>
                            <p class="text-sm text-gray-500">${trans.date}</p>
                        </div>
                        <div class="text-right">
                            <p class="font-bold text-lg">-$${trans.amount}</p>
                            <p class="text-sm text-gray-500">${trans.recipient}</p>
                        </div>
                    </div>
                </div>
            `;
        }
        transactionHTML += '</div>';
    }

    transactionsParent.innerHTML = transactionHTML;
}