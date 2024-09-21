document.getElementById("btn-out").addEventListener("click", function (e) {
  e.preventDefault();
  const outAmount = document.getElementById("btn-cashout").value;
  const outPin = document.getElementById("btn-cashpin").value;
  const mainAmount = document.getElementById("main-amount").innerText;
  if (outPin === "0895") {
    const cashAmount = parseFloat(outAmount);
    const totalAmount = parseFloat(mainAmount);
    const newAmount = totalAmount - cashAmount;
    document.getElementById("main-amount").innerText = newAmount;
  } else {
    alert("you don't cash out");
  }
});
