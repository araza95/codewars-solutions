/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

// Complexity [ O(m) ]
export class Kata {
  static getCount(str: string): number {
    // Use Set for faster lookup
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    let total = 0;

    for (let char of str) {
      if (vowels.has(char.toLowerCase())) {
        total++;
      }
    }

    return total;
  }
}

// Call the getCount function
const result = Kata.getCount("aeioulmnoq");

// Log the result
console.log(result);

// Ordinary Approach

// Complexity [ O(m * n) ]
export class Kata2 {
  static getCount(str: string): number {
    const vowels = ["a", "e", "i", "o", "u"];
    let total = 0;
    for (let index = 0; index < str.length; index++) {
      if (vowels.includes(str[index])) {
        total++;
      }
    }
    return total;
  }
}
