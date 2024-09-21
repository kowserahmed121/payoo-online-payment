document.getElementById("btn-add").addEventListener("click", function(e){
    e.preventDefault();
    const inputBtn = document.getElementById("btn-input").value;
    const inputPin = document.getElementById("btn-pin").value;
    console.log(inputBtn, inputPin)
    const mainAmount = document.getElementById("main-amount").value;
    
    if(inputPin === "0895"){
        const mainBalance = document.getElementById("main-amount").innerText;
        const mainTk = parseFloat(mainBalance);
        const inputTk = parseFloat(inputBtn);
        const newBalance = mainTk + inputTk;
        document.getElementById("main-amount").innerText = newBalance;
    } else {
        alert("try again")
    }
})