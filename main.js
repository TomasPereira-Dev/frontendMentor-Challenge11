const percentBtns = document.querySelectorAll(".percent-btn");
const customTipInput = document.getElementById("custom-tip");
const billInput = document.getElementById("bill");
const numberOfPeopleInput = document.getElementById("number-of-people-input");
const numberOfPeopleTitle = document.getElementById("number-of-people-title");
const tipAmountText = document.getElementById("tip-amount");
const totalAmountText = document.getElementById("total-amount");
const resetBtn = document.getElementById("reset-btn");

let billValue = null;
let totalBill = null;
let billPlusTip = null;
let numberOfPeopleValue = null;




const divideBill = (billValue, numberOfPeopleValue) => {
    totalBill = (billValue / numberOfPeopleValue).toFixed(2);
    totalAmountText.innerHTML = `$${totalBill}`; //when testing with vitest, if something changes the DOM
                                                   // while the test runs it will see it as an error  
    if(billValue <= 0 || numberOfPeopleValue <= 0){
        throw Error("The number of people or the bill value can't be zero or less")
    }
    return totalBill
}

document.addEventListener("DOMContentLoaded", () => { //it's needed for vitest to work, if the DOM elements load after the test
                                                        //ends its run it will fail
    billInput.addEventListener("change", (e) => {
        billValue = parseInt(e.target.value);
        if(!isNaN(billValue) && !isNaN(numberOfPeopleValue)){
            if(billValue > 0 && numberOfPeopleValue > 0){
                divideBill(billValue,numberOfPeopleValue)
            }
        }
    })
    
    numberOfPeopleInput.addEventListener("change", (e) => {
        numberOfPeopleValue = parseInt(e.target.value);
        if(!isNaN(billValue) && !isNaN(numberOfPeopleValue)){
            if(billValue > 0 && numberOfPeopleValue > 0){
                divideBill(billValue,numberOfPeopleValue)
            }   
        }
    })

    percentBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const percent = parseInt(btn.dataset.tip);
            if(billValue > 0 && numberOfPeopleValue > 0){
                let tip = (parseInt(billValue * percent)/100)/numberOfPeopleValue;
                billPlusTip = billValue + (tip * numberOfPeopleValue);
                tipAmountText.innerText = `$${tip}`;
                totalAmountText.innerText = `$${billPlusTip}`;
            }
        })
    })

    let customTipValue = null;
    customTipInput.addEventListener("change", (e) => {
        customTipValue = parseInt(e.target.value);
        if(billValue > 0 && numberOfPeopleValue > 0 && customTipValue > 0){
            let tip = (((billValue * customTipValue)/100)/numberOfPeopleValue);
            billPlusTip = billValue + (tip * numberOfPeopleValue);
            tipAmountText.innerText = `$${billPlusTip}`;
        }
    })
})



export default divideBill;