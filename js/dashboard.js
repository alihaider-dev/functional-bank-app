/* Deposit Balance */
document.getElementById('btn-deposit').addEventListener('click', function () {
  // Get value
  const targetInput = document.getElementById('deposit-input');
  const inputValue = targetInput.value;
  const convertValue = parseFloat(inputValue);

  // Set Value
  const history = document.getElementById('deposit-balance');
  const historyValue = history.innerText;
  const convertHistoryValue = parseFloat(historyValue);
  history.innerText = convertValue + convertHistoryValue;

  // Clear Value
  targetInput.value = "";

  // Update Total Balance
  const totalBalance = document.getElementById('total-balance');
  const totalBalanceValue = totalBalance.innerText;
  const convertTotalBalance = parseFloat(totalBalanceValue);
  totalBalance.innerText = convertTotalBalance + convertValue;
})

/* Withdraw Balance */
document.getElementById('btn-withdraw').addEventListener('click', function () {
  // Set Value
  const targetInput = document.getElementById('withdraw-input');
  const inputValue = targetInput.value;
  const convertValue = parseFloat(inputValue);

  // Get Value
  const history = document.getElementById('withdraw-balance');
  const historyValue = history.innerText;
  const convertHistoryValue = parseFloat(historyValue);
  history.innerText = convertValue + convertHistoryValue;

  // Clear Value
  targetInput.value = "";

  // Update Total Balance
  const totalBalance = document.getElementById('total-balance');
  const totalBalanceValue = totalBalance.innerText;
  const convertTotalBalance = parseFloat(totalBalanceValue);
  totalBalance.innerText = convertTotalBalance - convertValue;
})

