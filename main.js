const tipPercentBtn = document.querySelectorAll(".tip-percent-btn");
const customTipInput = document.getElementById("custom-tip");
const billInput = document.getElementById("bill");
const numberOfPeopleInput = document.getElementById("number-of-people-input");
const numberOfPeopleTitle = document.getElementById("number-of-people-title");
const tipAmountText = document.getElementById("tip-amount");
const totalAmountText = document.getElementById("total-amount");
const resetBtn = document.getElementById("reset-btn");

let billValue = null;
let numberOfPeopleValue = null;


const divideBill = (billValue, numberOfPeopleValue) => {
    let totalBill = billValue / numberOfPeopleValue;
    totalAmountText.innerHTML = `$${totalBill}`;
}

billInput.addEventListener("change", (e) => {
    billValue = e.target.value;
    if(!isNaN(billValue) && !isNaN(numberOfPeopleValue)){
        divideBill(billValue,numberOfPeopleValue)
    }
})

numberOfPeopleInput.addEventListener("change", (e) => {
    numberOfPeopleValue = e.target.value;
    if(!isNaN(billValue) && !isNaN(numberOfPeopleValue)){
        divideBill(billValue,numberOfPeopleValue)
    }
})

let customTipValue = null;
customTipInput.addEventListener("change", (e) => {
    customTipValue = e.target.value;
})



