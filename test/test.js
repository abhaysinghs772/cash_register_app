let billAmount = 100;
let cashAmount = 2000;
let change = 0;
const curencies = [
    '2000_rs_note',
    '500_rs_note',
    '100_rs_note',
    '20_rs_note',
    '10_rs_note',
    '5_rs_note',
    '1_rs_note'
]

const notes = [
    2000,
    500,
    100,
    20,
    10,
    5,
    1
]

// return change will be
if (billAmount <= 0 && cashAmount < billAmount) {
    console.log(`enter valid bill amount\n enter valid cash amount`);
} else {
    change = cashAmount - billAmount;
    console.log('change is ' + change);
    for (let i = 0; i < notes.length; i++) {
        console.log(`${curencies[i]} = ${ Math.floor(change / notes[i])}`);
        change %= notes[i];
    }
}

// console.log(`2000 rs note = ${noteOf_2000}\n 500 rs note = ${noteOf_500}\n 100 rs note = ${noteOf_100}\n 20 rs note = ${noteOf_20}\n 10 rs note = ${noteOf_10}\n 5 rs note = ${noteOf_5}\n 1 rs note = ${noteOf_1}`);
