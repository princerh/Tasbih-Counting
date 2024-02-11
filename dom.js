// All variable initilization 
const displaySubhan = document.getElementById('displaySubhan');
const incrementSubhan = document.getElementById('incrementSubhan');
const decrementSubhan = document.getElementById('decrementSubhan');

const displayAlham = document.getElementById('displayAlham');
const incrementAlham = document.getElementById('incrementAlham');
const decrementAlham = document.getElementById('decrementAlham');

const displayAllahu = document.getElementById('displayAllahu');
const incrementAllahu = document.getElementById('incrementAllahu');
const decrementAllahu = document.getElementById('decrementAllahu');

let subhanAllahInitialValue = 0;
let alhamdulillahInitialValue = 0;
let allahuAkberInitialValue = 0;

let countSubhan = 0;
let countAlham = 0;
let countMy = 0;
let total = 0;
let count = 0;



// Round completed text 
const round = document.getElementById('round');




const countSub = document.getElementById('countSubhan')

// SubhanAllah 
let checkUpSubhan = 0;

// SubhanAllah Increment Button 
incrementSubhan.addEventListener('click', function () {
    if (subhanAllahInitialValue === 33) {
        countSubhan += 1;
        checkUpSubhan += 1;
        incrementSubhan.setAttribute('disabled', true)
        decrementSubhan.setAttribute('disabled', true)
        if (checkUpSubhan < 2) {
            countSub.innerText = countSubhan;
            total = countAlham + countSubhan + countMy;
            if (total !== 0 && total % 3 === 0) {
                count += 1;
                round.innerText = count;
            }
        }
    }
    subhanAllahInitialValue += 1;
    if (subhanAllahInitialValue > 33) {
        subhanAllahInitialValue = 33;
        return alert("you have completed it");
    }
    displaySubhan.innerText = subhanAllahInitialValue;
})


// Subhan Allah Decrement Button 
decrementSubhan.addEventListener('click', function () {
    if (subhanAllahInitialValue === 0) {
        return alert("You cannot add a negative value");
    }
    subhanAllahInitialValue -= 1;
    displaySubhan.innerText = subhanAllahInitialValue;

})





const countAl = document.getElementById('countAlham')

// Alhamdulillah 
let checkUpAlham = 0;

// Alhamdulillah Increment Button 
incrementAlham.addEventListener('click', function () {
    if (alhamdulillahInitialValue === 33) {
        countAlham += 1;
        checkUpAlham += 1;
        incrementAlham.setAttribute('disabled', true)
        decrementAlham.setAttribute('disabled', true)
        if (checkUpAlham < 2) {
            countAl.innerText = countAlham;
            total = countAlham + countAlham + countMy;
            if (total !== 0 && total % 3 === 0) {
                count += 1;
                round.innerText = count;
            }
        }
    }
    alhamdulillahInitialValue += 1;
    if (alhamdulillahInitialValue > 33) {
        alhamdulillahInitialValue = 33;
        return alert("you have completed it");
    }
    displayAlham.innerText = alhamdulillahInitialValue;
})


// Alhamdulillah Decrement Button 
decrementAlham.addEventListener('click', function () {
    if (alhamdulillahInitialValue === 0) {
        return alert("You cannot add a negative value");
    }
    alhamdulillahInitialValue -= 1;
    displayAlham.innerText = alhamdulillahInitialValue;

})




let orginal = document.getElementById('Allaaah')

// Allahu Akber  
let checkUpAllahu = 0;
// Allahu Akber Increment Button 
incrementAllahu.addEventListener('click', function () {
    if (allahuAkberInitialValue === 33) {
        countMy += 1;
        checkUpAllahu += 1;
        incrementAllahu.setAttribute('disabled', true)
        decrementAllahu.setAttribute('disabled', true)
        if (checkUpAllahu < 2) {
            orginal.innerText = countMy;
            total = countAlham + countSubhan + countMy;
            if (total !== 0 && total % 3 === 0) {
                count += 1;
                round.innerText = count;
            }
        }
    }
    allahuAkberInitialValue += 1;
    if (allahuAkberInitialValue > 33) {
        allahuAkberInitialValue = 33;
        return alert("you have completed it");
    }
    displayAllahu.innerText = allahuAkberInitialValue;
})

// Allahu Akber Decrement Button 
decrementAllahu.addEventListener('click', function () {
    if (allahuAkberInitialValue === 0) {

        return alert("You cannot add a negative value");
    }
    allahuAkberInitialValue -= 1;
    displayAllahu.innerText = allahuAkberInitialValue;


})


// Reset SubhanAllah button 
document.getElementById('resetSubhan').addEventListener('click', function () {
    subhanAllahInitialValue = 0;
    displaySubhan.innerText = 0;
    checkUpSubhan = 0;
    incrementSubhan.removeAttribute('disabled')
    decrementSubhan.removeAttribute('disabled')
})
// Reset Alhamdulillah button 
document.getElementById('resetAlham').addEventListener('click', function () {
    alhamdulillahInitialValue = 0;
    displayAlham.innerText = 0;
    checkUpAlham = 0;
    incrementAlham.removeAttribute('disabled')
    decrementAlham.removeAttribute('disabled')
})
// Reset AllahuAkber button 
document.getElementById('resetAllahu').addEventListener('click', function () {
    allahuAkberInitialValue = 0;
    displayAllahu.innerText = 0;
    checkUpAllahu = 0;
    incrementAllahu.removeAttribute('disabled')
    decrementAllahu.removeAttribute('disabled')
})



// Reset All button 
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', function () {
    displaySubhan.innerText = 0;
    displayAlham.innerText = 0;
    displayAllahu.innerText = 0;
    subhanAllahInitialValue = 0;
    alhamdulillahInitialValue = 0;
    allahuAkberInitialValue = 0;

    
    checkUpAlham = 0;
    checkUpSubhan = 0;
    checkUpAllahu = 0;

    incrementSubhan.removeAttribute('disabled')
    decrementSubhan.removeAttribute('disabled')

    incrementAlham.removeAttribute('disabled')
    decrementAlham.removeAttribute('disabled')

    incrementAllahu.removeAttribute('disabled')
    decrementAllahu.removeAttribute('disabled')


    countAlham = 0;
    countSubhan = 0;
    countMy = 0;
    count = 0;
})



