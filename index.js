
// Write your code here

//let num1, num2, num3, num4 = 1; // tried to define outside of func

/*
function multiply(x,y) {
    let num1 = x;
    let num2 = y;
    let tot = num1*num2;
    return tot;
}

function random() {
    let n = Math.random();
    n = (parseInt(n, 10) * 10) + 1;
    return 5;
}

function mod(x,y) {
    num3 = x;
    num4 = y;
    return (x % y);
}

*/

function maxGet(set) {
    console.log(set);
    let high = 0;
    for (let x = 0; x < set.length; x++) {
        if (set[x] > high) {
            high = set[x];
            console.log(high);
        }
    }
    return high;
}



let num1 = 62;
let num2 = 1;
let num3 = 10;
let num4 = 6;

let multiply = num1*num2;
let random = Math.floor(Math.random() * 10);
let mod = num3 % num4;
//let max = 
let max = maxGet([10,15,20, 5]);