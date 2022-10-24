/** 2. Write a JavaScript program to convert temperatures to and from Celsius,Fahrenheit.
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C */

// function convert temperature from Fahrenheit to Celsius 
const tempConverterToCelsius = (fTemp) => {
    const celsiusToFahrenheit = ((fTemp - 32) * 5) / 9;
    console.log(`${fTemp}°F is ${celsiusToFahrenheit}°C`);
}

// function convert temperature from celsius to Fahrenheit 
const tempConverterToFahrenheit = (cTemp) => {
    const celsiusToFahrenheit = (cTemp * 9) / 5 + 32;
    console.log(`${cTemp}°C is ${celsiusToFahrenheit}°F`);
}

// function Calls
tempConverterToFahrenheit(60);
tempConverterToCelsius(45);