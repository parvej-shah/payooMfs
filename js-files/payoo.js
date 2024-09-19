document.getElementById('add-money-btn').addEventListener('click',function(){
   showAndHideElementById('add-money-section','latest-payment-section')
})

document.getElementById('add-money-btn-form').addEventListener('click',function(e){
e.preventDefault();
if(userValidation('login-password-add-money')){
   const currentBalance = getInnerTextById('current-balance');
   const addedBalance = Number(getValueById('add-amount-form'));
   const updatedBalance = currentBalance+addedBalance;
   setInnerTextById('current-balance',updatedBalance);
   showAndHideElementById('latest-payment-section','add-money-section')
}
else{
   alert("Wrong Pin");
}
})