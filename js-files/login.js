const webPass = '1234';
const webNumber = '01867681768';
document.getElementById("login-btn").addEventListener('click', function(event){
    event.preventDefault();
    const userPhoneNumber = getValueById('phone-number');
    const userPassword = getValueById('login-password');
    if(userPassword === webPass && userPhoneNumber===webNumber){
        console.log("you are Real")
    }
})