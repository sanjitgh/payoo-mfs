document.getElementById('btn-add-money')
.addEventListener('click', function(even){
    even.preventDefault();
    
    const addMoneyInput = document.getElementById('input-add-money').value;
    const addMoneyInputNumber = parseFloat(addMoneyInput);
    const addPinInput   = document.getElementById('input-pin-number').value;
    if(addPinInput === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber + addMoneyInputNumber;
        
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Faild to add money. Please try again.')
    }
})