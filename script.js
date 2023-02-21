const array = document.querySelector('.inputForArray');
const btn = document.getElementById('getBtn')
const sortBtn = document.querySelector('.sortBtn');
const statement = document.querySelector('.statement');
const arrayOutput = document.querySelector('.arrayout');
const outputStatement = document.querySelector('.outputStatement');
const themeBtn=document.querySelector('.theme');
const theme = document.getElementById('theme');
const body =document.querySelector(".bodytag");
const section = document.querySelector('.main');


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
        }, 2000 * (i))

    }
}

sortBtn.addEventListener('click', () => {
    if (arrayInput.length === 0) {
        statement.textContent = "no array input";
    } else {
        SelectionSort(arrayInput);
    }
})

// theme changing

theme.addEventListener('click',()=>{

    

    if (theme.innerText === 'LIGHT') {
        theme.textContent = 'DARK'
        body.style.backgroundColor ="#18191a";
        section.style.background ="linear-gradient(40deg,#17181880, #2f2b319a, #191a1a)";
        body.style.color="white"
        theme.style.backgroundColor="#333052"
    }else {
        theme.textContent = 'LIGHT'
        body.style.backgroundColor ="#006E90";
        section.style.background ="radial-gradient(#ADCAD6, #cdb4db, #41BBD9)";
        theme.style.backgroundColor="#5f948d"
        body.style.color="black"
    }
})
