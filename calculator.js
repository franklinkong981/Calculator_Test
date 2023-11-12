window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
}

// Get the current values from the UI
// Update the monthly payment
function update() {
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let principle = values.amount;
  let periodicInterestRate = values.yearlyRate / 12;
  let totalNumberPayments = values.years * 12;

  let numerator = principle * periodicInterestRate;
  let denominator = 1 - (Math.pow(1 + periodicInterestRate, totalNumberPayments * -1));
  let monthlyPayment = numerator / denominator;
  monthlyPayment = Math.round(monthlyPayment * 100) / 100;
  return monthlyPayment.toString();
}

let values = {
  amount: 1000,
  yearlyRate: 0.07,
  years: 6
}
console.log(calculateMonthlyPayment(values));

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
}
