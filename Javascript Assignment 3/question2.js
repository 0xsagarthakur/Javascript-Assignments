/** 2. Write a program to find whether a given number is armstrong number or
not The Armstrong number is a number that is equal to the sum of cubes of
its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong
numbers. Let's try to understand why 153 is an Armstrong number.
153 = (1*1*1)+(5*5*5)+(3*3*3) where:
(1*1*1)=1
(5*5*5)=125
(3*3*3)=27
So:
1+125+27=153 */

let number = parseInt(prompt('Enter a number:'));

let temp = number;
let sum = 0;

// loop to check the number is armstrong or not
while (temp > 0) {

    let remainder = temp % 10;
    sum += remainder * remainder * remainder;

    // removing last digit from the number
    temp = Math.floor(temp / 10);
}

// check the condition
if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}