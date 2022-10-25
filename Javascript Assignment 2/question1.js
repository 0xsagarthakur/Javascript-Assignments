/** 1. Write a Javascript function to check whether a triangle is equilateral, isosceles or scalene */

// function to check whether a triangle is equilateral, isosceles or scalene
const checkTriangle = (x, y, z) =>{
     
    if (x == y && y == z) {                  // Check for equilateral triangle  
        console.log('Equilateral Triangle');
    }
    else if (x == y || y == z || z == x)  {  // Check for isosceles triangle
        console.log('Isosceles Triangle');
    }
    else {                                  // Otherwise scalene triangle
        console.log('Scalene Triangle');
    }
}

const side1 = parseInt(prompt('Enter side1: '));
const side2 = parseInt(prompt('Enter side2: '));
const side3 = parseInt(prompt('Enter side3: '));

checkTriangle(side1, side2, side3);