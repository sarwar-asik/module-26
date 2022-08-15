// step-1////

document.getElementById("btn-deposit").addEventListener('click',function(){
// console.log('hi diposite button')
// step-2=== get dipo input field
const dipositeField = document.getElementById("diposit-field");
const newDepositAmountString =dipositeField.value;
const newDepositAmount = parseFloat(newDepositAmountString);
// console.log(depositAmount)
// step-3 == current dipost///
const dipostTotalElement = document.getElementById("deposit-total");
const previousDipositTotalString = dipostTotalElement.innerText ;
const previousDipositTotal =parseFloat(previousDipositTotalString);
// console.log(previousDipositTotal);
// step-4 add number to tottal diposite/.///
const currentDipositTotal = previousDipositTotal+newDepositAmount;

dipostTotalElement.innerText = currentDipositTotal;  
// step-5 get balance ///
// get previous balance ////
const BalanceTotalField = document.getElementById("balance-total");
const previousBalanceString =BalanceTotalField.innerText;
const previousBalanceTotal = parseFloat(previousBalanceString);
//Total current Balance //
BalanceTotalField.innerText = currentDipositTotal+previousBalanceTotal;

//for clear dipositField///
dipositeField.value =''
})