const lateFeeRates = {
    cash: 0.015, // 1.5% increased per day on cash
    cheque: 0.03, // 3% increased per day on cheque
    online: 0.05 // 5% increased per day on online payment
  };

  function payFee() {
    const studentName = document.getElementById("student-name").value;
    const paymentMode = document.getElementById("payment-mode").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const dueDateString = document.getElementById("due-date").value;
    const dueDate = new Date(dueDateString);

    // Calculate late fee based on payment mode
    let lateFee = 0;
    const currentDate = new Date();

    // Check if payment made after the due date
    if (currentDate > dueDate) {
      const daysLate = Math.floor((currentDate - dueDate) / (1000 * 60 * 60 * 24));
      const lateFeeRate = lateFeeRates[paymentMode];
      lateFee = amount * lateFeeRate * daysLate;
    }

    // Calculate the increased amount after the due date
    const increasedAmount = amount + lateFee;

    // Update payment details in the UI
    document.getElementById("user-name").textContent = studentName;
    document.getElementById("current-date").textContent = currentDate.toLocaleDateString("en-US");
    document.getElementById("display-due-date").textContent = dueDate.toLocaleDateString("en-US");
    document.getElementById("amount-display").textContent = increasedAmount.toFixed(2);

    // Show late fee if applicable
    if (lateFee > 0 && currentDate > dueDate) {
      document.getElementById("late-fee-amount").style.display = "block";
      document.getElementById("late-fee").textContent = lateFee.toFixed(2);

      const lateFeeRatePercentage = lateFeeRates[paymentMode] * 100;
      document.getElementById("late-fee-message").style.display = "block";
      document.getElementById("late-fee-message").textContent = `Fee is increased by ${lateFeeRatePercentage}% per day after the due date.`;
    } else {
      document.getElementById("late-fee-amount").style.display = "none";
      document.getElementById("late-fee-message").style.display = "none";
    }

    // Show payment details section
    document.getElementById("payment-details").style.display = "block";
  }

  function updateLateFee() {
    const paymentMode = document.getElementById("payment-mode").value;
    const lateFeeRate = lateFeeRates[paymentMode];
    document.getElementById("late-fee-amount").style.display = (lateFeeRate > 0) ? "block" : "none";
  }

  // Populate the form with a demo user for late fee calculation
  function populateDemoUser() {
    document.getElementById("student-name").value = "John Doe";
    document.getElementById("payment-mode").value = "online";
    document.getElementById("amount").value = "500";
    document.getElementById("due-date").value = "2023-07-15";
    updateLateFee();
  }

  // Call populateDemoUser on page load (for demonstration purposes)
  window.onload = populateDemoUser;