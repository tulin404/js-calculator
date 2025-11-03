
// GETTING THE VARIABLES OF THE DOM
const bigNumArea = document.getElementById('big-num-area');
const smallNumArea = document.getElementById('small-num-area');
const numBtns = document.getElementsByClassName('num-btn');
const operatorBtns = document.getElementsByClassName('operator-btn');
const clearBtn = document.getElementById('clear');

// CREATING THE BASIC FUNCTIONS
function clear() {
    bigNumArea.innerText = 0;
    smallNumArea.innerText = null;
};

function display(event) {
    const numArr = bigNumArea.innerText.split('');
    if (numArr.length >= 9){
        bigNumArea.innerText = bigNumArea.innerText.slice(1);
    };
    if (bigNumArea.innerText != 0) {
        bigNumArea.innerText += event.target.innerText;
    } else {
        bigNumArea.innerText = event.target.innerText;
    };

};
// ASSINGNING THE FUNCTIONS
clearBtn.addEventListener('click', clear)
for (const btn of numBtns) {
    btn.addEventListener('click', display);
};
for (const btn of operatorBtns) {
    btn.addEventListener('click', display)
}