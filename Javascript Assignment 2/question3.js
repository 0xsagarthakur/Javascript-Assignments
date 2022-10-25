/**3. Write a JavaScript program to find the sum of the multiples of 3 and 5 under 1000 */

// function to find the sum of the multiples of 3 and 5 under 1000
const findMultiples = (number) => {
    let sum = 0;
    for(let num=1; num < number; num++){
        if((num%3 == 0) && (num%5 == 0)){
            sum += num;
        }
    }
    console.log(`Sum of the multiples of 3 and 5 under ${number} is ${sum}`);
}

findMultiples(1000);