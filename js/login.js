// // button click and set event handeler
// document.getElementById('login-button')
// .addEventListener('click', function (event) {
//     event.preventDefault();  // browser loading hobe na 
//     // phone number select
//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber   = document.getElementById('pin-number').value;
    
//     // temporary test
//     if(phoneNumber === '0' && pinNumber === '1234'){
//         console.log('You are login');
//     }
//     else{
//         alert('Wrong phone number or pin')
//     }
// })

document.getElementById('login-button')
.addEventListener('click', function(event){
    event.preventDefault()
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber   = document.getElementById('pin-number').value;
    
    if(phoneNumber === '014' && pinNumber === '0'){
        window.location.href = '/home.html'
    }
    else{
        alert('your information is wroang')
    }
})