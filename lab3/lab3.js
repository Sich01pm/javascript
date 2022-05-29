'use strict';
function getDecimal(num) {
    let a = num.slice(num.indexOf("."));
    let str = 0 + a;
    if (Number(num) < 0) {
        str = 1 - Number(str);
        str = str.toFixed(a.length - 1);
    }
    return str;
}

function ucFirst(str) {
    return (str[0].toUpperCase() + str.slice(1));
}
let str = prompt("Введи строку");
alert(ucFirst(str));

function checkSpam(str) {
    str = str.toLowerCase();
    if ((str.includes('xxx')) || (str.includes('viagra')))
        return true;
    else return false;
}

function truncate(str, maxlength) {
    if (str.length > maxlength)
        str = str.slice(0, maxlength - 1) + '\u{2026}';
    return str;
}