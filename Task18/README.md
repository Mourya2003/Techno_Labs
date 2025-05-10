# Message Mixer

## Description
Message Mixer is a modular messaging service that allows users to perform various string manipulations. This application provides a set of functions that can be used to transform and manipulate text in creative ways.

## Features
- **countCharacters**: Returns the number of characters in a string.
- **capitalizeFirst**: Capitalizes the first character of each word in a string.
- **reverseWords**: Reverses the order of words in a string.
- **reverseCharacters**: Reverses the characters in a string.
- **replaceFirstOccurrence**: Replaces the first occurrence of a substring in a string.
- **replaceAllOccurrences**: Replaces all occurrences of a substring in a string.
- **encode**: Encodes a string by swapping certain characters.
- **palindrome**: Returns a string and its reverse.
- **pigLatin**: Transforms a sentence into Pig Latin using a specified character.

## Usage
To run the application, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd Message-Mixer
   ```

3. Install the necessary dependencies:
   ```
   npm install
   ```

4. Run the application:
   ```
   node src/message.js
   ```

### Example Function Calls
```javascript
console.log(countCharacters("Hello World")); // Outputs: 11
console.log(capitalizeFirst("hello world")); // Outputs: "Hello World"
console.log(reverseWords("Hello World")); // Outputs: "World Hello"
console.log(reverseCharacters("Hello")); // Outputs: "olleH"
console.log(replaceFirstOccurrence("Hello World", "World", "Everyone")); // Outputs: "Hello Everyone"
console.log(replaceAllOccurrences("Hello World", "o", "a")); // Outputs: "Hella Warld"
console.log(encode("Hello")); // Outputs: "H3ll0"
console.log(palindrome("racecar")); // Outputs: "racecar"
console.log(pigLatin("Hello World")); // Outputs: "elloHay orldWay"
```

## GitHub Commands
To initialize and push your project to GitHub, use the following commands:
1. git init
2. git add .
3. git commit -m "Initial commit of Message Mixer project"
4. git branch -M main
5. git remote add origin <repository-url>
6. git push -u origin main