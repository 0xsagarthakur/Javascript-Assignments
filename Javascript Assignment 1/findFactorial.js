// 3. Write a program to find the factorial of a number.

// function to find factorial
const findFactorial = (number) => {
    
    if(number < 0){
        console.log('Error! Factorial for negative number does not exist.');
    } 
    else if(number == 0){
        console.log(`The factorial of ${number} is 1.`)
    }
    else {
        let fact = 1;
        for (let count = 1; count <= number; count++) {
            fact *= count;
        }
        console.log(`The factorial of ${number} is ${fact}.`);    
    }
} 

//Input to take the number value
const number = prompt('Enter a number to find factorial :');

findFactorial(number);
