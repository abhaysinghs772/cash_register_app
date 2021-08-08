`strict mode`

const notes = [2000, 500, 100, 20, 10, 5, 1];
const billAmount = document.querySelector('.billAmount');
const nextBtn = document.querySelector('.next');
const cashGiven = document.querySelector('.cashAmount');
const checkBtn = document.querySelector('.check');
const cashContainer = document.querySelector('.cashContainer')
const returnCashContainer = document.querySelector('.returnCashContainer');
const billWarningMessage = document.querySelector('.billWarningMessage');
const cashWarningMessage = document.querySelector('.cashWarningMessage');
const no_Of_Notes = document.querySelectorAll('.no_Of_Notes')
let billAmountVal;
let cashGivenVal;

nextBtn.addEventListener('click', () => {
    // console.log(billAmount.value);
    billAmountVal = billAmount.value;

    // billAmountVal is a string type
    if (billAmountVal.length != 0) {

        // if input field is not empty then hiding the warning message
        billWarningMessage.style.display = 'none';
        // showing cashContainer
        cashContainer.style.display = 'block';

        checkBtn.addEventListener('click', () => {
        
            cashGivenVal = cashGiven.value;
            if (cashGivenVal.length != 0) {
                // if input field is not empty then hiding the warning message
                cashWarningMessage.style.display = 'none';
                // showing result 
                returnCashContainer.style.display = 'block';
                returnCash(billAmount.value, cashGiven.value);

            } else {
                cashWarningMessage.style.display = 'block';
            }
        });
        console.log(billAmount.value);
    } else {
        billWarningMessage.style.display = 'block';
    }
});

function returnCash(bill, cash) {
    let change = cash - bill;
    // console.log(bill, cash, change);
    for (let i = 0; i < notes.length; i++) {
        no_Of_Notes[i].innerText = Math.floor(change / notes[i]);
        change %= notes[i];
    }
}