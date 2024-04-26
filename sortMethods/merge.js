async function mergeSort(arr, l, r) {
    if (l >= r) {
        return; 
    }
    const m =l+ parseInt((r-l)/2);
    await mergeSort(arr, l, m);
    await mergeSort(arr,m+1,r);
    await merge(arr,l,m,r, l == 0 && r == arr.length - 1);
}

async function merge(arr, l, m, r, isFinalMerge) {
    var n1 = m - l + 1;
    var n2 = r - m;
    var L = new Array(n1);
    var R = new Array(n2);

    const maxHeight = document.getElementById('array-container').clientHeight;

    for (var i = 0; i < n1; i++) {
        await waitFor(50);
        L[i] = arr[l + i];
        document.getElementsByClassName('bar')[l + i].style.backgroundColor = 'red';
    }
    for (let j = 0; j < n2; j++) {
        await waitFor(50);
        R[j] = arr[m + 1 + j];
        document.getElementsByClassName('bar')[m + 1 + j].style.backgroundColor = 'red';
    }

    var i = 0, j = 0, k = l;

    while (i < n1 && j < n2) {
        await waitFor(50);
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        document.getElementsByClassName('bar')[k].style.height = `${array[k] * maxHeight}px`;
        document.getElementsByClassName('bar')[k].style.backgroundColor = isFinalMerge ? 'green' : '#444444';
        sound(50, array[k] * 700, .5);
        k++;
    }

    while (i < n1) {
        await waitFor(50);
        arr[k] = L[i];
        document.getElementsByClassName('bar')[k].style.height = `${array[k] * maxHeight}px`;
        document.getElementsByClassName('bar')[k].style.backgroundColor = isFinalMerge ? 'green' : '#444444';
        sound(50, array[k] * 700, .5);
        i++;
        k++;
    }

    while (j < n2) {
        await waitFor(50);
        arr[k] = R[j];
        document.getElementsByClassName('bar')[k].style.height = `${array[k] * maxHeight}px`;
        document.getElementsByClassName('bar')[k].style.backgroundColor = isFinalMerge ? 'green' : '#444444';
        sound(50, array[k] * 700, .5);
        j++;
        k++;
    }
}

function waitFor(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
