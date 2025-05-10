export function countCharacter(inputString, character) {
  let count = 0;
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === character) {
      count++;
    }
  }
  return count;
}

export function capitalizeFirstCharacterOfWords(string) {
  return string
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

export function reverseWord(word) {
  return word.split("").reverse().join("");
}

export function reverseAllWords(sentence) {
  return sentence
    .split(" ")
    .map(word => reverseWord(word))
    .join(" ");
}

export function replaceFirstOccurrence(string, toBeReplaced, replaceWith) {
  return string.replace(toBeReplaced, replaceWith);
}

export function replaceAllOccurrences(string, toBeReplaced, replaceWith) {
  return string.split(toBeReplaced).join(replaceWith);
}

export function encode(string) {
  const replacements = { a: "@", s: "$", i: "!", o: "0" };
  for (let key in replacements) {
    string = replaceAllOccurrences(string, key, replacements[key]);
  }
  return string;
}

export function palindrome(str) {
  return `${str} ${reverseWord(str)}`;
}

export function pigLatin(sentence, character) {
  return sentence.split(" ").join(character + " ");
}