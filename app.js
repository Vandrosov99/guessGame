// game values

let min = 1,
    max = 10,
    winNum = getRandomNum(min, max),
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
    UIgame.addEventListener('mousedown', newGame);
};

function newGame(e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
}


function sub(e) {
    let guess = parseInt(UIinput.value);
    console.log(guess);

    if (isNaN(guess) || guess < min || guess > max) {
        if (isNaN(guess)) {
            countOfTry = countOfTry + 1;
        }
        setMessage(`Enter your number between ${min} and ${max}`, 'red');
    }

    if (guess === winNum) {
        doGame(true, `YOU WON! ${guess} is correct!`)
        //  setMessage(`YOU WON! ${guess} is correct!`, 'green')
    } else {
        countOfTry = countOfTry - 1;
        if (countOfTry === 0) {
            doGame(false, `YOU LOSE, answer was  ${winNum}`);
        } else {
            //  UIinput.style.borderColor = 'red';
            UIinput.value = '';
            setMessage(`${guess} is not true, tries left ${countOfTry} `, 'orange');
        }
    }
}

function setMessage(msg, color) {
    UImsg.textContent = msg;
    UImsg.style.color = color;
    setTimeout(removeErr, 10000);

}

function removeErr() {
    UImsg.textContent = '';
}

function doGame(action, msg) {
    let color;
    color = action === true ? 'green' : 'red';
    UIinput.style.borderColor = color;
    UIinput.disabled = true;
    UIsubmit.value = 'play again';
    UIsubmit.className += 'play-again';
    setMessage(msg, color);
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + 1)
}