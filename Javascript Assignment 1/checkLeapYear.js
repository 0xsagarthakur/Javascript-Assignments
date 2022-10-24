//1. Write a program to find whether a given year is a leap year or not.

// function to check a leap year
const checkLeapYear = (year) => {

    //Leap year conditions
    if ((year % 400 == 0) || (year % 4 == 0) && (year % 100 != 0)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

//Input to take the year value
const year = prompt('Enter a year:');

checkLeapYear(year);
