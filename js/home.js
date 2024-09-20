// add money event handler

// step-1: click the add money button
document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        // prevent page relode / disable reload
        event.preventDefault();
        
        // step-2: get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    const addPinInput   = document.getElementById('input-pin-number').value;
    console.log(addMoneyInput, addPinInput)
})