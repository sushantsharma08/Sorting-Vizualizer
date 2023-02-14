const array = document.querySelector('.inputForArray');
const btn = document.getElementById('getBtn')
const showBtn = document.querySelector('.showBtn');
const sortBtn = document.querySelector('.sortBtn');
const statement = document.querySelector('.statement');
const arrayOutput = document.querySelector('.arrayout');
const outputStatement = document.querySelector('.outputStatement');

let arrayInput = '';
let arrayOfSpans = [];

let updatedSpan = function () {
    for (let i = 0; i < arrayInput.length; i++) {
        document.getElementById(`span-${i}`).textContent = arrayInput[i];
    }
}

// create spans
btn.addEventListener('click', () => {
    arrayInput = array.value;
    arrayInput = arrayInput.split(',').map(Number);
    for (let i = 0; i < arrayInput.length; i++) {
        let createSpan = document.createElement('span');
        createSpan.id = `span-${i}`;
        createSpan.style.paddingInline = "3px";
        createSpan.style.border = "2px solid black";
        createSpan.style.marginInline = "8px";
        arrayOfSpans.push(createSpan);
    }
    console.log(arrayInput);
    arrayOutput.innerHTML =arrayInput;
    console.log(...arrayOfSpans);
    statement.replaceChildren(...arrayOfSpans);
    updatedSpan();
})

function SelectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
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
        }, 5000 * (i))

    }
}

// showBtn.addEventListener('click', () => {


// })

sortBtn.addEventListener('click', () => {
    if (arrayInput.length === 0) {
        statement.textContent = "no array input";
    } else {
        SelectionSort(arrayInput);
    }
})

