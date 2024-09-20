document.getElementById('btn-show-cash-out')
.addEventListener('click' , function (){
    // show the cashout from
    document.getElementById('cash-out-form').classList.remove('hidden');
    // hide the add money from
    document.getElementById('add-money-form').classList.add('hidden');

})

// show add money form and hide the cashout from
document.getElementById('btn-show-add-money')
.addEventListener('click' , function(){
    // show add money form
    document.getElementById('add-money-form').classList.remove('hidden');
    // hide cashout from
    document.getElementById('cash-out-form').classList.add('hidden');

})