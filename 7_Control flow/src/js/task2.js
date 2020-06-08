if (!window.confirm('Do you want to play a game?')) {
    alert('You did not become a billionaire, but can.');
}
let attempts = 3;
let yourPrize = 0;
let maxPrize = 100;
let highRank = 100;
let range = 5;
let five = 5;
let tree = 3;
let two = 2;
let sR;
let userNumber;
let round;
let random1 = Math.floor(Math.random() * five + 0);

do {
    userNumber = parseInt(prompt(`Choose a roulette pocket number from 0 to ${range}
Attempts left: ${attempts}
Total prize: ${yourPrize}
Possible prize on current attempts: ${highRank}`));

    if (userNumber !== random1) {
        alert('Thank you for your participation. Your prize is: ' + yourPrize + ' $');
        round = window.confirm('Do you want to play again?');
        if (round === false) {
            break;
        } else {
            attempts--;
            maxPrize = maxPrize / two;
            highRank = highRank / two;
        }
    } else if (userNumber === random1) {
        sR = window.confirm('Congratulation, you won! Your prize is: ' + highRank + ' $. Do you want to continue?');
        yourPrize = maxPrize + yourPrize
        if (sR === false) {
            attempts--;
            yourPrize = yourPrize / two;
            alert('Thank you for your participation. Your prize is: ' + yourPrize + ' $');
            confirm('Do you want to play again?');
        } else {
            range = range + five;
            highRank = highRank * two;
            maxPrize = maxPrize * two;
            attempts = tree;
            five = five + five;
            random1 = Math.floor(Math.random() * five + 0);
        }
    }
} while (attempts > 0);