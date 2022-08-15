document.getElementById("btn-withdraw").addEventListener('click',function(){
// step-2 get from withdraw input field/// 
const withDrawField = document.getElementById("WithDraw-field");
const newWithdrawAmountString = withDrawField.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString);

// for clear step-7 ///
withDrawField.value = '';
//Extra work!! for remove none////
if(isNaN(newWithdrawAmount)){
    alert('Please! Provide a Valid Number');
    return;
}

// /step-3////
const previousWithdrawElement =document.getElementById("withdwar-total");
const previousWithDrawString = previousWithdrawElement.innerText;
const previousWithDraw = parseFloat(previousWithDrawString);


// step-5///

const balanceElement = document.getElementById("balance-total");
const previousBalanceTotalString =balanceElement.innerText;
const previousBalanceTotal =parseFloat(previousBalanceTotalString);

const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;


if(newWithdrawAmount>= previousBalanceTotal){
    alert('You cannot WithDraw more than your balance');
    return;
}
// step-4 total withdraw  ammount//
const previousTotalWithDraw = previousWithDraw+newWithdrawAmount;

previousWithdrawElement.innerText = previousTotalWithDraw;


// step-6///
balanceElement.innerText =newBalanceTotal;


})