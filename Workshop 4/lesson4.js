let currentCount = 0
let counterX = document.getElementById("counterX")

let btnIncr = document.querySelector('.incr');
let btnDecr = document.querySelector('.decr');
let btnReset = document.querySelector('.reset');

btnIncr.addEventListener('click',() =>{
    currentCount++;
    counterX.textContent = currentCount;
});

btnDecr.addEventListener('click', () =>  {
    currentCount--;
    counterX.textContent = currentCount;
});

btnReset.addEventListener('click', () => {
    currentCount = 0;
    counterX.textContent = currentCount;
});