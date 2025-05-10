// The value of kelvin will not change, so we use 'const'
const kelvin = 293;

// Celsius is 273 degrees less than Kelvin
const celsius = kelvin - 273;

// Fahrenheit can change if we round it, so we use 'let'
let fahrenheit = celsius * (9 / 5) + 32;

// Round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

// Log the temperature in Fahrenheit using string interpolation
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Extra practice: Convert Celsius to Newton scale
let newton = celsius * (33 / 100);

// Round down the Newton temperature
newton = Math.floor(newton);

// Log the temperature in Newton using string interpolation
console.log(`The temperature is ${newton} degrees Newton.`);