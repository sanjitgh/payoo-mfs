document.getElementById('btn-cash-out')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const addMoneyInput = document.getElementById('input-cash-out-amount').value;
        const addMoneyInputNum = parseFloat(addMoneyInput)
        const addPinInput = document.getElementById('input-cash-out-pin').value;


        if (addPinInput === '1234') {
            const balance = document.getElementById('account-balance').innerText;
            const balanceNumber = parseFloat(balance);
            const newBalance = balanceNumber - addMoneyInputNum;
            document.getElementById('account-balance').innerText = newBalance
        }
        else {
            alert('Faild to cash out. Please try again!')
        }
    })