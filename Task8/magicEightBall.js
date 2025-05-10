// Define userName as an empty string. User can enter their name here.
let userName = "";

// Ternary expression to greet the user
console.log(userName ? `Hello, ${userName}!` : "Hello!");

// Define the user's question
let userQuestion = "Will I get an A on my project?";

// Log the user's question
console.log(userName ? `${userName} asks: ${userQuestion}` : `You asked: ${userQuestion}`);

// Generate a random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8);

// Define eightBall as an empty string
let eightBall = "";

// Use a switch statement to assign a response based on randomNumber
switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
}

// Print the Magic Eight Ball's answer
console.log(`Magic Eight Ball says: ${eightBall}`);