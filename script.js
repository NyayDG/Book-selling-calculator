let totalBooksSold = 0;
let totalSalesAmount = 0;
let moneyGiven = 0;
let moneyRemaining = 0;

// Load data from localStorage on page load
loadData();

function recordSale() {
    const booksSold = parseInt(document.getElementById("booksSold").value);
    const bookPrice = parseFloat(document.getElementById("bookPrice").value);
    const moneyReceived = parseFloat(document.getElementById("moneyReceived").value);

    if (!isNaN(booksSold) && !isNaN(bookPrice) && !isNaN(moneyReceived)) {
        const saleAmount = booksSold * bookPrice;
        totalBooksSold += booksSold;
        totalSalesAmount += saleAmount;
        moneyGiven += moneyReceived;
        moneyRemaining = totalSalesAmount - moneyGiven;

        saveData(); // Save data to localStorage
        updateSummary();
    }
}

function calculateTotal() {
    const booksSold = parseInt(document.getElementById("booksSold").value);
    const bookPrice = parseFloat(document.getElementById("bookPrice").value);

    if (!isNaN(booksSold) && !isNaN(bookPrice)) {
        const total = booksSold * bookPrice;
        alert(`Total Price: $${total.toFixed(2)}`);
    }
}

function updateSummary() {
    document.getElementById("totalBooksSold").textContent = totalBooksSold;
    document.getElementById("totalSalesAmount").textContent = totalSalesAmount.toFixed(2);
    document.getElementById("moneyGiven").textContent = moneyGiven.toFixed(2);
    document.getElementById("moneyRemaining").textContent = moneyRemaining.toFixed(2);
}

function saveData() {
    const data = {
        totalBooksSold,
        totalSalesAmount,
        moneyGiven,
        moneyRemaining
    };
    localStorage.setItem("bookSalesData", JSON.stringify(data));
}

function clearPrices() {
    const confirmation = confirm("Are you sure you want to clear all prices? This action cannot be undone.");
    if (confirmation) {
        totalBooksSold = 0;
        totalSalesAmount = 0;
        moneyGiven = 0;
        moneyRemaining = 0;

        saveData(); // Save cleared data to localStorage
        updateSummary();
    }
}


function loadData() {
    const data = JSON.parse(localStorage.getItem("bookSalesData"));
    if (data) {
        totalBooksSold = data.totalBooksSold || 0;
        totalSalesAmount = data.totalSalesAmount || 0;
        moneyGiven = data.moneyGiven || 0;
        moneyRemaining = data.moneyRemaining || 0;
        updateSummary();
    }
}
