/* 
Recursive Factorial
Input: integer
Output: integer, product of ints from 1 up to given integer

If less than zero, treat as zero.
Bonus: If not integer, truncate (remove decimals).

Experts tell us 0! is 1.

rFact(3) = 6 (1*2*3)
rFact(6.8) = 720 (1*2*3*4*5*6)
*/

const num1 = 3;
const expected1 = 6;
// Explanation: 1*2*3 = 6

const num2 = 6.8;
const expected2 = 720;
// Explanation: 1*2*3*4*5*6 = 720

const num3 = 0;
const expected3 = 1;

// Mine & Brian's - not quite finished
// function factorial(n) {
    //Your code here
    //Santize value?
    //Base case?
    //Recursive return / call
//     var x = Math.floor(n);
//     if (x >= 1){
//         console.log("x: ", x, "n: ", n)
//         return n*factorial(--x)
//     }
//     else {
//         return 1
//     }
// }

function factorial(n) {
    n = Math.floor(n);
    if(n <= 0){
        return 1;
    }
    else {
        return n * factorial(n-1);
    }
}

/*****************************************************************************/
console.log(factorial(num1)) // 6
console.log(factorial(num2)) // 720
console.log(factorial(num3)) // 1

/* 
Return the fibonacci number at the nth position, recursively.
                    fib(n) = fib(n-1) + fib(n-2)
Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
The next number is found by adding up the two numbers before it,
starting with 0 and 1 as the first two numbers of the sequence.
*/

const numA = 0;
const expectedA = 0;

const numB = 1;
const expectedB = 1;

const numC = 2;
const expectedC = 1;

const numD = 3;
const expectedD = 2;

const numE = 4;
const expectedE = 3;

const numF = 8;
const expectedF = 21;

// Luke's:
function fibonacci(num, memo) {
    memo = memo || {}
    if(memo[num]) return memo[num];
    if(num <= 1) return num
    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo)
}

// Time Consuming Way -> DON'T DO
// function fibonacci(num) {
//     if (num < 2) {
//         return num
//     }
//     return fibonacci(num - 1) + fibonacci(num - 2);
// }

// How to use MEMO - Spencer's Way:
function fibonacciMemo(num, memo = { 0: 0, 1: 1 }) {
    //Your code here
    //Base case(s)?
    //Recursive return / call
    if (memo[num] == undefined) {
        memo[num] = fibonacciMemo(num - 1, memo) + fibonacciMemo(num - 2, memo);
    }
    return memo[num];

}


/*****************************************************************************/
console.log(fibonacci(numA)) // 0
console.log(fibonacci(numB)) // 1
console.log(fibonacci(numC)) // 1
console.log(fibonacci(numD)) // 2
console.log(fibonacci(numE)) // 3
console.log(fibonacci(numF)) // 21