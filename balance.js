// balance.js

// 1. User data object with balance property initialized to 0
const userData = {
    balance: 0
};

// 2. Function to load balance from localStorage
function loadBalance() {
    const savedBalance = localStorage.getItem('userBalance');
    if (savedBalance) {
        userData.balance = parseFloat(savedBalance);
    }
}

// 3. Function to save balance to localStorage
function saveBalance() {
    localStorage.setItem('userBalance', userData.balance);
}

// 4. Function to deduct balance after successful payment proof submission
function submitPaymentProof(amount) {
    if(userData.balance >= amount) {
        userData.balance -= amount;
        saveBalance();
        return true; // Payment successful
    } else {
        console.warn('Insufficient balance!');
        return false; // Payment failed
    }
}

// 5. Functions to display current balance on account and tracker page
function displayBalance() {
    const balanceElement = document.getElementById('balanceDisplay');
    if (balanceElement) {
        balanceElement.innerText = `Current Balance: $${userData.balance}`;
    }
}

// 6. Validation to prevent negative balance
function validateBalance(amount) {
    return userData.balance + amount >= 0;
}

// Load balance on page load
window.onload = loadBalance;