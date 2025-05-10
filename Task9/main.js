let raceNumber = Math.floor(Math.random() * 1000);

// Change these values to test different scenarios
let registeredEarly = true;
let age = 20;

// Early adults get race numbers >= 1000
if (age > 18 && registeredEarly) {
  raceNumber += 1000;
}

// Assign race time and log instructions
if (age > 18 && registeredEarly) {
  console.log(`You will race at 9:30 am. Your race number is ${raceNumber}.`);
} else if (age > 18 && !registeredEarly) {
  console.log(`You will race at 11:00 am. Your race number is ${raceNumber}.`);
} else if (age < 18) {
  console.log(`You will race at 12:30 pm. Your race number is ${raceNumber}.`);
} else {
  // Exactly 18 years old
  console.log('Please see the registration desk.');
}