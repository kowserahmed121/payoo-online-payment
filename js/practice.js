document.getElementById("btn-add").addEventListener("click", function (e) {
  e.preventDefault();

  const btnAmount = document.getElementById("btn-input").value;
  const btnPin = document.getElementById("btn-pin").value;
  const mainbalance = document.getElementById("main-amount").innerText;

  if (btnPin === "0895") {
    const addAmount = parseFloat(btnAmount);
    const mainAmount = parseFloat(mainbalance);

    const updateAmount = addAmount+mainAmount;

    document.getElementById("main-amount").innerText = updateAmount;
  } else {
    alert("try again")
  }
});
