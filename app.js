`strict mode`

// currencies
const notes = [2000, 500, 100, 20, 10, 5, 1]
const bill_Amount= document.querySelector('billAmount');
const nextBtn = document.querySelector('next');

// console.log(bill_Amount);
console.log(nextBtn);
nextBtn.addEventListener('click', (e)=>{
    console.log('clicked', e);
})