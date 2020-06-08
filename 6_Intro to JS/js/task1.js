function tipCalc() {
    const amount = parseInt(window.prompt('Check number: ', ''));
    const pears = parseInt(window.prompt('Tip: ', ''));
    const hundr = 100;
    const tipAmount = amount / hundr * pears;
    const maxPars = 100;
    const sum = amount + pears;

    if (!sum || sum < 0 || !pears || pears < 0 || pears > maxPars) {
        alert('Invalid input data');
    } else {
        alert(`Check number: ${amount}
Tip: ${pears}%
Tip amount: ${tipAmount}
Total sum to pay: ${sum}`);
    }
}
tipCalc();