async function bubbleSort(arr, n){
    var i, j, temp;
    var swapped;
    const maxHeight = document.getElementById('array-container').clientHeight;

    for (i = 0; i < n - 1; i++) {
        if (!isSorting) return;
        
        swapped = false;
        for (j = 0; j < n - i - 1; j++) {
            if (!isSorting) return;
            
            document.getElementsByClassName('bar')[j].style.backgroundColor = 'red';
            document.getElementsByClassName('bar')[j + 1].style.backgroundColor = 'blue';
            await waitFor(50);

            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;

                document.getElementsByClassName('bar')[j].style.height = `${arr[j] * maxHeight}px`;
                document.getElementsByClassName('bar')[j + 1].style.height = `${arr[j + 1] * maxHeight}px`;
                sound(50, arr[j] * 700, .5);
            }

            document.getElementsByClassName('bar')[j].style.backgroundColor = '#444444';
            document.getElementsByClassName('bar')[j + 1].style.backgroundColor = '#444444';
        }
        
        document.getElementsByClassName('bar')[n - i - 1].style.backgroundColor = 'green';
        
        if (swapped == false)
        break;
    }

    for (j = 0; j < n; j++) {
        document.getElementsByClassName('bar')[j].style.backgroundColor = 'green';
    }
    isSorting = false;
}

async function printArray(arr, size) {
  var i;
  for (i = 0; i < size; i++)
      console.log(arr[i] + " ");
}

function waitFor(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
