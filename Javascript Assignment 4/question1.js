/** 
This assignment will help you interpret mathematical relationships both
algebraically and geometrically.
Create a function that takes a number (step) as an argument and returns the
number of matchsticks in that step. See step 1, 2 and 3 in the image above.
Take input from the user in the function parameter and return the output
using the return statement.
examples - matchHouses(1) ➞ 6
matchHouses(4) ➞ 21
matchHouses(87) ➞ 436 */

// Take Input
const house = parseInt(prompt('Enter the number:'));

const sticks = matchHouses(house);

// function return number of matchsticks
function matchHouses(houses){
    let count = 1;
    let matchSticks = 0;
    for(let step = 0; step < houses; step++){
        matchSticks = count * 6 - step;
        count++;
    }
    return matchSticks;
}

console.log(`matchHouses(${house}) ➞ ${sticks}`);