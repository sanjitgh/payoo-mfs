// add money event handler

// step-1: click the add money button
document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        // prevent page relode / disable reload
        event.preventDefault();

        // step-2: get money to be added to the account
        const addMoneyInput = document.getElementById('input-add-money').value;
        const addPinInput = document.getElementById('input-pin-number').value;

        // step-3:verify pin number
        if (addPinInput !== '1234') {
            alert('faild to add money! please try again.')
        }
        // step-4:get the current balance
        const balance = document.getElementById('account-balance').innerText;

        // step-5: add money addMoneyInput with balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        //  step-6: update balance the ui
        document.getElementById('account-balance').innerText = newBalance;
    })