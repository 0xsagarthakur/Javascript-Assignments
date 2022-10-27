/** 3. Write a program to find whether a given number is special number or
not If the sum of the factorial of digits of a number (N) is equal to the
number itself, the number (N) is called a special number.
eg- 145 is a special number
Logic- 1! + 4! + 5!= 1+24+120 i.e 145 */

let number = parseInt(prompt('Enter a number:'));

let temp = number;
let sum = 0;

while (temp > 0) {

    let remainder = temp % 10;
    sum += findFactorial(remainder);

    // removing last digit from the number
    temp = Math.floor(temp / 10);
}

/** function to find factorial */
function findFactorial (num) {

    let fact = 1;
    for (let count = 1; count <= num; count++) {
        fact *= count;
    }

    return fact;
} 

// check the condition
if (sum == number) {
    console.log(`${number} is a special number.`);
}
else {
    console.log(`${number} is not a special number.`);
}