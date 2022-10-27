/** 1. Using for loops, write a Javascript program to output the following
pattern -
1
2 3
4 5 6
7 8 9 10 */

let pattern = '';
let count = 1;

// nested loop pattern program
for(let i=1; i<=4; i++){
    for(let j=1; j<=i; j++){
        pattern += count + ' ';
        count++; 
    }
    // newline
    pattern += '\n';
}

console.log(pattern);