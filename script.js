const array = document.querySelector('.inputForArray');
const btn = document.getElementById('getBtn')
const sortBtn = document.querySelector('.sortBtn');
const statement = document.querySelector('.statement');
const arrayOutput = document.querySelector('.arrayout');
const outputStatement = document.querySelector('.outputStatement');
const themeBtn = document.querySelector('.theme');
const theme = document.getElementById('theme');
const body = document.querySelector(".bodytag");
const section = document.querySelector('.main');
const sortType = document.getElementById('sortType');

let arrayInput = '';

let updatedSpan = function () {
    for (let i = 0; i < arrayInput.length; i++) {
        document.getElementById(`span-${i}`).textContent = arrayInput[i];
    }
}

// create spans
btn.addEventListener('click', () => {
    arrayInput = array.value;
    arrayInput = arrayInput.split(',').map(Number);
    const arrayOfSpans = [];
    console.log(arrayInput.length);
    for (let i = 0; i < arrayInput.length; i++) {
        let createSpan = document.createElement('span');
        createSpan.id = `span-${i}`;
        createSpan.style.paddingInline = "3px";
        createSpan.style.border = "2px solid black";
        createSpan.style.marginInline = "8px";
        arrayOfSpans.push(createSpan);
    }
    console.log(arrayInput);
    arrayOutput.innerHTML = arrayInput;
    console.log(...arrayOfSpans);
    statement.replaceChildren(...arrayOfSpans);
    updatedSpan();
})

function SelectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        setTimeout(() => {
            document.getElementById(`span-${i}`).style.backgroundColor = 'rgba( 96 , 191 , 96 , 0.376 )';
            let min_ind = i;
            for (let j = i + 1; j < arr.length; j++) {
                document.getElementById(`span-${j}`).style.backgroundColor = 'rgba( 196 , 91 , 96 , 0.376 )';
                if (arr[j] < arr[min_ind]) {
                    [arr[j], arr[min_ind]] = [arr[min_ind], arr[j]]
                }
            }
            updatedSpan();
        }, 2000 * (i))

    }
}

function insertionSort(arr) {
    let i, key, j;
    for (i = 1; i < arr.length; i++) {
        key = arr[i];
        j = i - 1;
        // setTimeout(() => {
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
            // document.getElementById(`span-${j}`).style.backgroundColor = 'rgba( 191 , 191 , 96 , 0.376 )';
        }
        // document.getElementById(`span-${i}`).style.backgroundColor = 'rgba( 91 , 191 , 96 , 0.376 )';
        arr[j + 1] = key;
        updatedSpan()
        // },100 );
    }
}


function partition(arr, low, high) {

    // pivot
    let pivot = arr[high];

    // Index of smaller element and
    // indicates the right position
    // of pivot found so far
    let i = (low - 1);
    // setTimeout(() => {
        
        
        for (let j = low; j <= high - 1; j++) {
            // setTimeout(() => {

            // If current element is smaller
            // than the pivot
            if (arr[j] < pivot) {

                // Increment index of
                // smaller element
                i++;
                swap(arr, i, j);
            }
        // }, 1000);
        }

        swap(arr, i + 1, high);
        updatedSpan()
        return (i + 1);

}


// Javascript implementation of QuickSort


// A utility function to swap two elements
function swap(arr, i, j) {
    // setTimeout(() => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    // }, 1000);

}

/* The main function that implements QuickSort
          arr[] --> Array to be sorted,
          low --> Starting index,
          high --> Ending index
 */
function quickSort(arr, low, high) {
    if (low < high) {

        // pi is partitioning index, arr[p]
        // is now at right place
        let pi = partition(arr, low, high);

        // Separately sort elements before
        // partition and after partition
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}



sortBtn.addEventListener('click', () => {
    if (arrayInput.length === 0) {
        statement.textContent = "no array input";
    } else {
        if (sortType.value === 'Selection') {
            SelectionSort(arrayInput);
        }
        else if (sortType.value === 'Insertion') {
            insertionSort(arrayInput);
        }
        else if (sortType.value === 'Quick') {
            quickSort(arrayInput, 0, arrayInput.length - 1)
        }
    }
    console.log(sortType.value);
})

// theme changing

theme.addEventListener('click', () => {



    if (theme.innerText === 'LIGHT') {
        theme.textContent = 'DARK'
        body.style.backgroundColor = "#18191a";
        section.style.background = "linear-gradient(40deg,#17181880, #2f2b319a, #191a1a)";
        body.style.color = "white"
        theme.style.backgroundColor = "#333052"
    } else {
        theme.textContent = 'LIGHT'
        body.style.backgroundColor = "#006E90";
        section.style.background = "radial-gradient(#ADCAD6, #cdb4db, #41BBD9)";
        theme.style.backgroundColor = "#5f948d"
        body.style.color = "black"
    }
})
