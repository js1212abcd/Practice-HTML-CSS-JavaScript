let preLogin = window.prompt('Enter your login: ', '');

if (preLogin === null || preLogin === '') {
    alert('Canceled.');
}
const login = preLogin.toLowerCase();
let loginlenght = login.length;
let four = 4;
let passWord;

if (loginlenght < four) {
    alert("I don't know any users having name length less than 4 symbols");

} else if (login === 'user' || login === 'admin') {
    passWord = prompt('Enter your password: ', '');

    if (passWord === '' || passWord === null) {
        alert('Canceled.');
    }
} else {
    alert("I don't know you");
}

const d = new Date();
const n = d.getHours();
const ngt = 20;
const day = 8;

if (login === 'user' && passWord === 'UserPass') {
    if (n > ngt && n < day) {
        alert('Good evening, dear User!')
    } else {
        alert('Good day, dear User!')
    }
} else if (login === 'admin' && passWord === 'RootPass') {
    if (n > ngt && n < day) {
        alert('Good evening, dear Admin!')
    } else {
        alert('Good day, dear Admin!')
    }
} else {
    alert('Wrong password')
}