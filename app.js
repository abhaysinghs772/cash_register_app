`strict mode`

// currencies
const notes = [2000, 500, 100, 20, 10, 5, 1]
const billAmount= document.querySelector('.billAmount');
const nextBtn = document.querySelector('.next');
const cashGiven = document.querySelector('.cashAmount');
const checkBtn =document.querySelector('.check');
const cashContainer = document.querySelector('.cashContainer')
const returnCashContainer = document.querySelector('.returnCashContainer');
let billAmountVal;
let cashGivenVal;
warningMessage = document.querySelector('.warningMessage');

nextBtn.addEventListener('click', ()=>{
    // console.log(billAmount.value);
    billAmountVal = billAmount.value;

    // billAmountVal is a string type
    if(billAmountVal.length != 0){
        // showing cashContainer
        cashContainer.style.display = 'block';
        
        checkBtn.addEventListener('click',()=>{
            cashGivenVal = cashGiven.value;
            
            // showing result 
            returnCashContainer.style.display = 'block'
        });
    }else{
        warningMessage.style.display = 'block'
    }
});
