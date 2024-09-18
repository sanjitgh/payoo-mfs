// button click and set event handeler
document.getElementById('login-button')
.addEventListener('click', function (event) {
    event.preventDefault();  // browser loading hobe na 
    console.log('login button clicked');
    // phone number select
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
})