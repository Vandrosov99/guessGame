// game values

let min = 1,
    max = 10,
    winNum = 3,
    countOfTry = 3;


//UI 

const UImin = document.querySelector('.min'),
    UImax = document.querySelector('.max'),
    UIgame = document.querySelector('.game'),
    UIinput = document.querySelector('#yourGuess'),
    UIsubmit = document.querySelector('#result'),
    UImsg = document.querySelector('.message');

//assing UI min and max

UImin.textContent = min;
UImax.textContent = max;


// main function 
eventInit();







function eventInit() {
    //events 
    UIsubmit.addEventListener('click', sub);
};



function sub() {
    let guess = parseInt(UIinput.value);
    console.log(guess);

    if (isNaN(guess) || guess < min || guess > max) {
        setTimeout(removeErr, 3000);
        setMessage(`Enter your number between ${min} and $ ${max}`, 'red');
    }

    if (guess === winNum) {
        UIinput.disabled = true;
        UIinput.style.borderColor = 'green';
        setMessage(`YOU WON! ${guess} is correct!`, 'green')
    } else {

    }
}


function setMessage(msg, color) {
    UImsg.textContent = msg;
    UImsg.style.color = color;
    //setTimeout(removeErr, 3000);

}

function removeErr() {
    UImsg.remove();
}