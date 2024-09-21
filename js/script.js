document.getElementById('btn-login').addEventListener('click', function(e){
    e.preventDefault();
    
    const phoneNumber = document.getElementById('input-phone').value;
    console.log(phoneNumber)
    const pinNumber = document.getElementById('input-pin').value;
    console.log(pinNumber)
    if(phoneNumber === "01917450567" && pinNumber === "0895"){
        window.location.href = "./home.html"
    } else {
        alert("phone number or pin is no valid")
    }
})