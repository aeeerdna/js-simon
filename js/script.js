console.log('JS OK!!')

// get element html file
const container = document.getElementById('container');

// 5 casual numbers
const guessNumbers = uniqueNumbers(5, 1, 100);

// print on htlm file
container.innerHTML = guessNumbers.join(' - ');

// 5 seconds timeout
setTimeout(function () {
    console.log('5 seconds timeout');

    container.innerHTML = '';

    setTimeout(enterNumbers, 100);
}, 5 * 1000);




// FUNCTIONS //

// function random number
function casualNumbers(min, max) {
    const rangeNumber = max - min + 1

    return Math.floor(Math.random() * rangeNumber) + min;
}

// function unique number
function uniqueNumbers(howMany, min, max) {
    const array = [];

    while (array.length < howMany) {
        const randomNumber = casualNumbers(min, max);
        if (!array.includes(randomNumber)) {
            array.push(randomNumber);
        }
    }

    return array;
}

// function enter numbers
function enterNumbers() {
    const tryToGuessTheNumber = guessedUserNumbers();                       // user enter numbers
    console.log(tryToGuessTheNumber);


    let guessedNumbers = 0;

    for (let i = 0; i < tryToGuessTheNumber.length; i++) {                    // for loop guessed numbers by the user
        const userNumbers = tryToGuessTheNumber[i];
        if (guessNumbers.includes(userNumbers)) {
            console.log('You guessed the number!!!', userNumbers);
            guessedNumbers++;
        }
    }

    console.log('You guessed', guessedNumbers, 'numbers!!!')                // what numbers did the user guess?
}


// function guessed number by the user

function guessedUserNumbers() {
    const guessedNumbers = [];

    while (guessedNumbers.length < 5) {
        const number = parseInt(prompt('Try to guess the number'));             // prompt window try to guess the casual number

        if (!isNaN(number) && !guessedNumbers.includes(number)) {
            guessedNumbers.push(number);
        }
    }

    return guessedNumbers;
}