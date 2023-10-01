document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositField = document.getElementById("deposit");
  const depositFieldString = depositField.value;
  const inpuAmount = parseFloat(depositFieldString);
  depositField.value = "";
  const depositValue = document.getElementById("num1");
  const depositValueString = depositValue.innerText;
  const currentDeposit = parseFloat(depositValueString);
  const depositNow = currentDeposit + inpuAmount;
  depositValue.innerText = depositNow;
  // balnce add now
  const balanceNow = document.getElementById("num3");
  const balanceAddString = balanceNow.innerText;
  const balanceAdd = parseFloat(balanceAddString);
  const addNewBalance = inpuAmount + balanceAdd;
  balanceNow.innerText = addNewBalance;

  // console.log(inpuAmount)
});

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw");
  const withdrawFieldString = withdrawField.value;
  const withdrawAmount = parseFloat(withdrawFieldString);
  withdrawField.value = "";

  // balnce add now
  const balanceNow = document.getElementById("num3");
  const withdrawValue = document.getElementById("num2");
  const withdrawValueString = withdrawValue.innerText;
  const currentWithdraw = parseFloat(withdrawValueString);
  const withdrawNow = currentWithdraw + withdrawAmount;
  withdrawValue.innerText = withdrawNow;

  
const balanceAddString = balanceNow.innerText;
const balanceRemove = parseFloat(balanceAddString);
const addNewBalance = balanceRemove - withdrawAmount;
balanceNow.innerText = addNewBalance;
  
});
