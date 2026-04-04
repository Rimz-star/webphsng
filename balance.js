// balance.js - FIXED VERSION

// Function to set balance in localStorage
function setBalance(balance) {
    localStorage.setItem('userBalance', JSON.stringify(balance));
    console.log('Balance saved:', balance);
}

// Function to get balance from localStorage
function getBalance() {
    const balance = JSON.parse(localStorage.getItem('userBalance')) || 0;
    console.log('Balance loaded:', balance);
    return balance;
}

// Function to update display
function updateDisplay() {
    const balanceElement = document.getElementById('balance');
    if (balanceElement) {
        balanceElement.textContent = `Balance: $${getBalance()}`;
    }
}

// Function to handle purchase
function handlePurchase(amount) {
    const currentBalance = getBalance();
    if (currentBalance >= amount) {
        setBalance(currentBalance - amount);
        updateDisplay();
        alert('Purchase successful! Saldo berkurang.');
        return true;
    } else {
        alert('Saldo tidak cukup untuk membeli item ini!');
        return false;
    }
}

// Function to add balance
function addBalance(amount) {
    const currentBalance = getBalance();
    setBalance(currentBalance + amount);
    updateDisplay();
    alert('Saldo berhasil ditambahkan!');
}

// Load balance on page load with multiple fallbacks
function initBalance() {
    updateDisplay();
}

// DOMContentLoaded - paling reliable
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBalance);
} else {
    initBalance();
}

// Backup: window.load
window.addEventListener('load', initBalance);

// Backup: Focus kembali ke window
window.addEventListener('focus', updateDisplay);