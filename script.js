const arrayContainer = document.getElementById('array-container');
const array=[];

document.getElementById('generate-array').addEventListener('click',function(){
    generateArray();
});

document.getElementById('merge').addEventListener('click',function(){
    mergeSort(array, 0, array.length -1);
});

/*
document.getElementById('quick').addEventListener('click',function(){
    
});
document.getElementById('bubble').addEventListener('click',function(){
    
});

*/

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
