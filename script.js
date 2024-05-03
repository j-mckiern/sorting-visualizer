const arrayContainer = document.getElementById('array-container');
const array=[];
let isSorting = false;

document.getElementById('generate-array').addEventListener('click',function(){
    location.reload();
});

document.getElementById('merge').addEventListener('click',function(){
    if (isSorting){
        alert("A sorting operation is already in progress. Please wait until it completes or generate a new array.");
        return;    
    }
    isSorting = true;
    mergeSort(array, 0, array.length - 1).then(() => isSorting = false);
});

document.getElementById('quick').addEventListener('click',function(){
    if (isSorting){
        alert("A sorting operation is already in progress. Please wait until it completes or generate a new array.");
        return;    
    }
    isSorting = true;
    quickSort(array, 0, array.length - 1).then(() => isSorting = false);
});


document.getElementById('bubble').addEventListener('click',function(){
    if (isSorting){
        alert("A sorting operation is already in progress. Please wait until it completes or generate a new array.");
        return;    
    }
    isSorting = true;
    bubbleSort(array, array.length).then(() => isSorting = false);
});


function generateArray(){
    arrayContainer.innerHTML = '';
    for(let i = 0; i < 50; i++){
       let value =  (Math.floor(Math.random() * 100) + 10)/150;
       array[i] = value;
       const bar = document.createElement('div');
       bar.classList.add('bar');
       bar.style.height = `${value * 2}px`;
       arrayContainer.appendChild(bar);
    }
    adjustBarHeights();
}

function adjustBarHeights() {
    const maxHeight = arrayContainer.clientHeight;  
    array.forEach((value, index) => {
        const bar = arrayContainer.children[index];
        bar.style.height = `${(value) * maxHeight}px`;
    });
}

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function sound(dur, freq, vol){
    let oscillator = audioCtx.createOscillator();
    let gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    gainNode.gain.value = vol;
    oscillator.frequency.value = freq;
    oscillator.type = 'sine';

    oscillator.start();
    setTimeout(() => {
        oscillator.stop();
    }, dur);
}

generateArray();
window.addEventListener('resize', adjustBarHeights);
