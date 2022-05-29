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