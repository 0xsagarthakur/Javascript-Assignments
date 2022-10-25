/**4. Write a program to find the factorial of all prime numbers between a
given range . Range will be passed as 2 values in the function
parameters. eg- if it is needed to find the values for numbers 1-100, then
function declaration can look like - function prime(1,100) */

// Take input
const startRange = parseInt(prompt('Enter number to start range:'));
const endRange = parseInt(prompt('Enter number to end range:'));

if(startRange < endRange && startRange != endRange){
    console.log(`The Prime numbers & Factorials between ${startRange} and ${endRange} are:`);
    prime(startRange, endRange);
}
else {
    console.log('Please provide correct value to start & end range. (e.g. 1-100)')
}

// find prime number between the start & end range
function prime(startValue, endValue) {
    for (let i = startValue; i <= endValue; i++) {
        let flag = 0;
    
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
    
        if (i > 1 && flag == 0) {
            console.log(`Prime Number is ${i} & Factorial is ${findFactorial(i)}`);
        }
    }
}



/** function to find factorial of all prime numbers between a given range.*/
function findFactorial (number) {

    let fact = 1;
    for (let count = 1; count <= number; count++) {
        fact *= count;
    }

    return BigInt(fact);
} 
