/*
Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"


*/

export function spinWords(words: string): string {
  const wordsArray = words.split(" ");

  let final = [];
  for (const word of wordsArray) {
    if (word.length <= 5) {
      final.push(word);
      continue;
    }

    final.push(word.split("").reverse().join(""));
  }
  return final.join(" ");
}

// Short and concise solution

export function spinWords2(words: string): string {
  return words
    .split(" ")
    .map((word) =>
      word.length >= 5 ? word.split("").reverse().join("") : word
    )
    .join(" ");
}

console.log(spinWords2("Hey fellow warriors")); // Hey wollef sroirraw
