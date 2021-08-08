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
let message;

nextBtn.addEventListener('click', () => {

    // billAmountVal is a string type
    if ( Number(billAmount.value) > 0) {

        // if input field is not empty then hiding the warning message
        billWarningMessage.style.display = 'none';
        // showing cashContainer
        cashContainer.style.display = 'block';

        checkBtn.addEventListener('click', () => {

            if (Number(cashGiven.value) >= Number(billAmount.value)) {
                // if input field is not empty then hiding the warning message
                hideErrMsz(cashWarningMessage);
                // showing result 
                returnCashContainer.style.display = 'block';
                returnCash(billAmount.value, cashGiven.value);
            } else {
                message = `Cash is less then bill Amount, please enter valid Cash Amount!`;
                showErrMsz(cashWarningMessage, message);
                returnCashContainer.style.display = 'none';
            }
        });
    } else {
        message = `bill amount must be greater then 0`;
        showErrMsz(billWarningMessage, message)
    }
});

function showErrMsz(selector, msz){
    selector.style.display = 'block';
    selector.innerText = msz;
}

function hideErrMsz(selector){
    selector.style.display = 'none';
}

function returnCash(bill, cash) {
    let change = cash - bill;
    // console.log(bill, cash, change);
    for (let i = 0; i < notes.length; i++) {
        no_Of_Notes[i].innerText = Math.floor(change / notes[i]);
        change %= notes[i];
    }
}