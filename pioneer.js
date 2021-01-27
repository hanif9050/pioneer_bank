const mainArea = document.getElementById("main-area");
const mainBtn = document.getElementById("main-btn");
const transectionArea = document.getElementById("transection-area");
mainBtn.addEventListener("click", () => {
    mainArea.style.display = "none";
    transectionArea.style.display = "block";
})

const depositBtn = document.getElementById("deposit-btn");
// deposit total


depositBtn.addEventListener("click", function() {
        // const depositAmount = document.getElementById("deposit-amt").value;
        // const depositAmountNumber = parseFloat(depositAmount);
        const depositAmountNumber = convertFloat("deposit-amt")

        // const depositTotal = document.getElementById("deposit-total").innerText;
        // const depositTotalNumber = parseFloat(depositTotal);
        // const totalDeposit = depositTotalNumber + depositAmountNumber;
        // document.getElementById("deposit-total").innerText = totalDeposit;
        // document.getElementById("deposit-amt").value = "";
        updateInfo("deposit-total", depositAmountNumber)
        updateInfo("balance", depositAmountNumber)
        document.getElementById("deposit-amt").value = "";

    })
    // end of deposit total
    // withdraw
const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", function() {
        const withdrawAmount = convertFloat("withdraw-amt");
        updateInfo("withdraw-total", withdrawAmount);
        updateInfo("balance", -1 * withdrawAmount);
        document.getElementById("withdraw-amt").value = "";
    })
    // end of withdraw

function convertFloat(id) {
    const Amount = document.getElementById(id).value;
    const amountNumber = parseFloat(Amount);
    return amountNumber;
}

function updateInfo(id, deposit) {
    const Total = document.getElementById(id).innerText;
    const TotalNumber = parseFloat(Total);
    const totalDeposit = TotalNumber + deposit;
    document.getElementById(id).innerText = totalDeposit;

}