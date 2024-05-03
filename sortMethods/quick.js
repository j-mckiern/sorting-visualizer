async function partition(arr, low, high){
    let pivot = arr[high];
    const maxHeight = document.getElementById('array-container').clientHeight;
    document.getElementsByClassName('bar')[high].style.backgroundColor = 'purple';

    let i = low - 1;

    for(let j = low; j <= high - 1; j++){
        document.getElementsByClassName('bar')[j].style.backgroundColor = 'red';
        await waitFor(50);
        if(arr[j] < pivot){
            i++;
            [arr[i],arr[j]] = [arr[j],arr[i]];
            sound(50, arr[i] * 700, .5);

            document.getElementsByClassName('bar')[i].style.height = `${arr[i] * maxHeight}px`;
            document.getElementsByClassName('bar')[j].style.height = `${arr[j] * maxHeight}px`;
            document.getElementsByClassName('bar')[i].style.backgroundColor = 'blue';
            document.getElementsByClassName('bar')[j].style.backgroundColor = 'blue';
            await waitFor(50);

            document.getElementsByClassName('bar')[i].style.backgroundColor = '#444444';
            document.getElementsByClassName('bar')[j].style.backgroundColor = '#444444';
        }
        document.getElementsByClassName('bar')[j].style.backgroundColor = '#444444';
    }

    document.getElementsByClassName('bar')[high].style.backgroundColor = '#444444';

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    sound(50, arr[i+1] * 700, .5);

    document.getElementsByClassName('bar')[i + 1].style.height = `${arr[i + 1] * maxHeight}px`;
    document.getElementsByClassName('bar')[high].style.height = `${arr[high] * maxHeight}px`;
    document.getElementsByClassName('bar')[i + 1].style.backgroundColor = 'green';
    return i + 1;
}

async function quickSort(arr, low, high){
    if (!isSorting) return;
    if(low < high){
        let pi = await partition(arr, low, high);

        await quickSort(arr, low, pi - 1);
        await quickSort(arr, pi + 1, high);
    } else {
        if(low === high) {
            const maxHeight = document.getElementById('array-container').clientHeight;
            document.getElementsByClassName('bar')[low].style.height = `${arr[low] * maxHeight}px`;
            document.getElementsByClassName('bar')[low].style.backgroundColor = 'green';
        }
    }
    if (low == 0 && high == arr.length - 1) isSorting = false;
}

function waitFor(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
