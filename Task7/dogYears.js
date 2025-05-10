// 1. Create a variable named myAge, and set it equal to your age as a number.
let myAge = 20; // This variable stores my age in human years.

// 2. Create a variable named earlyYears and save the value 2 to it.
let earlyYears = 2; // The first two years of a dog's life.

// 3. Multiply earlyYears by 10.5 to get the dog years for the first two years.
earlyYears *= 10.5; // Each of the first two years counts as 10.5 dog years.

// 4. Subtract 2 from myAge to get the later years.
let laterYears = myAge - 2; // Years after the first two years of life.

// 5. Multiply laterYears by 4 to get the dog years for the later years.
laterYears *= 4; // Each later year counts as 4 dog years.

// 6. (Optional) Print earlyYears and laterYears to check values.
console.log(earlyYears); // Should be 21 if myAge >= 2
console.log(laterYears); // Should be (myAge - 2) * 4

// 7. Add earlyYears and laterYears to get total dog years.
let myAgeInDogYears = earlyYears + laterYears; // Total age in dog years.

// 8. Use .toLowerCase() on your name and store in myName.
let myName = "Mohammad Waris".toLowerCase(); // Converts my name to all lowercase letters.

// 9. Print the final sentence using string interpolation.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`); // Displays the result.