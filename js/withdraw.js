document.getElementById("btn-withdraw").addEventListener('click',function(){
// step-2 get from withdraw input field/// 
const withDrawField = document.getElementById("WithDraw-field");
const newWithdrawAmountString = withDrawField.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString);
// /step-3////
const previousWithdrawElement =document.getElementById("withdwar-total");
const previousWithDrawString = previousWithdrawElement.innerText;
const previousWithDraw = parseFloat(previousWithDrawString);

// step-4 total withdraw  ammount//
const previousTotalWithDraw = previousWithDraw+newWithdrawAmount;

previousWithdrawElement.innerText = previousTotalWithDraw;
// step-5///

const balanceElement = document.getElementById("balance-total");
const previousBalanceTotalString =balanceElement.innerText;
const previousBalanceTotal =parseFloat(previousBalanceTotalString);

const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;


balanceElement.innerText =newBalanceTotal;
// for clear ///
withDrawField.value = ''

})