import {
    countCharacter,
    capitalizeFirstCharacterOfWords,
    reverseWord,
    reverseAllWords,
    replaceFirstOccurrence,
    replaceAllOccurrences,
    encode,
    palindrome,
    pigLatin
  } from './messageMixer';
  
  function displayMessage() {
    console.log(countCharacter("hello world", "l"));
    console.log(capitalizeFirstCharacterOfWords("hello world"));
    console.log(reverseWord("hello"));
    console.log(reverseAllWords("hello world"));
    console.log(replaceFirstOccurrence("hello world", "world", "there"));
    console.log(replaceAllOccurrences("hello world world", "world", "there"));
    console.log(encode("hello world"));
    console.log(palindrome("hello"));
    console.log(pigLatin("hello world", "-"));
  }
  
  displayMessage();