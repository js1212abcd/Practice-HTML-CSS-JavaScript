function converter(dataArray) {
    let resArr = [];
    for (let i = 0; i < dataArray.length; i++) {
        if (typeof dataArray[i] === 'string') {
            resArr.push(parseInt(dataArray[i]));
        } else {
            resArr.push(dataArray[i] + '');
        }
    }
    return resArr;
}


//2 перепроверить
function taskTwo(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}
taskTwo([1, 2, 3], function(el) {
    console.log(el * 2)
})

//3 проверить
function taskTree(arr, func) {
    let arrResult = [];
    taskTwo(arr, function(el) {
        arrResult.push(func.parseInt(el))
    });
    return arrResult;
}
taskTree([2, 5, 8]),
    function(el) {
        console.log(el + 3)
    }

// 4 
function isBigEnough(value) {
    return value % 2 === 0;
}
let filtered = [2, 5, 8].filter(isBigEnough);


// 5
function taskFive() {
    let arr = [2, 5, 8];
    let n = arr.includes(2);
    return n
}


// 6
function taskSix() {
    const reverseString = str => [...str].reverse().join('');
    console.log(reverseString('hey world'));
    return reverseString('hey world')
}



// 7  
function range(start, end) {
    let myArray = [];
    for (let i = start; i <= end; i += 1) {
        myArray.push(i);
    }
    return myArray;
}


// 8 
function fru() {
    const fruits = [
        { name: 'apple', weight: 0.5 },
        { name: 'pineapple', weight: 2 }
    ]
    const newFruit = fruits.map(fruits => {
        return fruits.name
    })
    console.log(newFruit);
}

// 9
function myFunction() {
    let str = [58, 14, 48, 12, 31, 19, 10];
    let res = str.replace(/[10-20]/g, '*');
    document.getElementById(res)
}



// 10
function taskTen(nd) {
    nd = 1;
    let d = new Date('02 Jan 2020');
    d.setDate(d.getDate() - nd + 1);
    return nd + ', (' + d.toUTCString() + ')';
}


// 11
function taskEl() {
    const date = new Date();
    let output = date.getFullYear() + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + +
        ('0' + date.getDate()).slice(-2) + ' ' + date.getHours() + ':' + date.getMinutes()

    console.log(output)
    return output
}