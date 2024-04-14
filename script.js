const arrayContainer = document.getElementById('array-container');
const array=[];

document.getElementById('generate-array').addEventListener('click',function(){
    generateArray();
});

/*

document.getElementById('merge').addEventListener('click',function(){
    
});
document.getElementById('quick').addEventListener('click',function(){
    
});
document.getElementById('bubble').addEventListener('click',function(){
    
});

*/

function generateArray(){
    arrayContainer.innerHTML = '';
    for(let i = 0; i < 50; i++){
       let value =  Math.floor(Math.random() * 100) + 10;
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
        bar.style.height = `${(maxHeight * value) / 150}px`; 
    });
}

generateArray();
window.addEventListener('resize', adjustBarHeights);