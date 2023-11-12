
it('should calculate the monthly rate correctly', function () {
  let values = {
    amount: 1000,
    yearlyRate: 0.07,
    years: 6
  };
  expect(calculateMonthlyPayment(values)).toEqual("17.05");
  expect(calculateMonthlyPayment(values)).toBeInstanceOf(String);
});


it("should return a result with 2 decimal places", function() {
  let values = {
    amount: 1000,
    yearlyRate: 0.07,
    years: 6
  };
  let monthlyPaymentString = calculateMonthlyPayment(values);
  let decimalIndex = monthlyPaymentString.indexOf(".");
  let afterDecimalString = monthlyPaymentString.substring(decimalIndex + 1);
  expect(afterDecimalString.length).toEqual(2);
});

/// etc
