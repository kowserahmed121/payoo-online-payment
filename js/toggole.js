document.getElementById("cash-out-btn").addEventListener("click", function(){
    document.getElementById("cash-out-div").classList.remove("hidden");
    document.getElementById("add-money").classList.add("hidden")
})

document.getElementById("add-money-btn").addEventListener("click", function(){
    document.getElementById("cash-out-div").classList.add("hidden");
    document.getElementById("add-money").classList.remove("hidden")
})