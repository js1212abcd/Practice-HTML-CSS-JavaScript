function countPoints(elem = ['3:1', '3:3', '0:5']) {
    let sum = 0;
    for (let i = 0; i < elem.length; i++) {
        if ((elem[i][0]) > (elem[i][2])) {
            sum += 3;
        }
        if ((elem[i][0]) === (elem[i][2])) {
            sum += 1;
        }
    }
    return sum
}
countPoints();