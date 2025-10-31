
// GETTING THE VARIABLES OF THE DOM
const bigNumArea = document.getElementById('big-num-area');
const smallNumArea = document.getElementById('small-num-area');
const numBtns = document.getElementsByClassName('num-btn');
const clearBtn = document.getElementById('clear');

// CREATING THE BASIC FUNCTIONS
function clear() {
    bigNumArea.innerText = 0;
    smallNumArea.innerText = '';
}

// ASSINGNING THE FUNCTIONS
clearBtn.addEventListener('click', clear)