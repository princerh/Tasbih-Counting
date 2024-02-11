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

// SubhanAllah 
incrementSubhan.addEventListener('click', function(){
    if(subhanAllahInitialValue === 33){
        return alert("You have completed it, complete another one");
    }
subhanAllahInitialValue += 1;
displaySubhan.innerText = subhanAllahInitialValue;
})
decrementSubhan.addEventListener('click', function(){
    if(subhanAllahInitialValue === 0){
        return alert("You cannot add a negative value");
    }
    subhanAllahInitialValue -= 1;
displaySubhan.innerText = subhanAllahInitialValue;

})

// Alhamdulillah 
incrementAlham.addEventListener('click', function(){
    if(alhamdulillahInitialValue === 33){
        return alert("You have completed it, complete another one");
    }
alhamdulillahInitialValue += 1;
displayAlham.innerText = alhamdulillahInitialValue;
})
decrementAlham.addEventListener('click', function(){
    if(alhamdulillahInitialValue === 0){
        return alert("You cannot add a negative value");
    }
    alhamdulillahInitialValue -= 1;
displayAlham.innerText = alhamdulillahInitialValue;

})

// Allahu Akber  
incrementAllahu.addEventListener('click', function(){
    if(allahuAkberInitialValue === 33){
        return alert("You have completed it, complete another one");
    }
allahuAkberInitialValue += 1;
displayAllahu.innerText = allahuAkberInitialValue;
})
decrementAllahu.addEventListener('click', function(){
    if(allahuAkberInitialValue === 0){
        return alert("You cannot add a negative value");
    }
    allahuAkberInitialValue -= 1;
displayAllahu.innerText = allahuAkberInitialValue;

})

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', function(){
    displaySubhan.innerText = 0;
    displayAlham.innerText = 0;
    displayAllahu.innerText = 0;
    subhanAllahInitialValue = 0;
    alhamdulillahInitialValue = 0;
    allahuAkberInitialValue = 0;
})
