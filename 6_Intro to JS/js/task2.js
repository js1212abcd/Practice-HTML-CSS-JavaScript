function findMiddle() {
    let str = window.prompt('Enter your word: ', '');
    if (str === null || str === '') {
        return alert('Invalid input data');
    }
    let length = str.length;
    if (!str.replace(/\s/g, '').length) {
        return alert('Invalid input data');
    }
    let two = 2;
    let middle = Math.floor(length / two);
     if (length % two === 0) {
        alert(str[middle - 1] + str[middle]);
    } else {
        alert(str[middle]);
    }
}
findMiddle();