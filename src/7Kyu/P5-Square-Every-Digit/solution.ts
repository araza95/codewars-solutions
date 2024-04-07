/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.
*/
export class Kata {
  static squareDigits(num: number): number {
    // Input validation: Check if the input is a valid number
    if (isNaN(+num)) {
      throw new Error("Invalid input: Not a number");
    }

    // Convert negative numbers to positive for processing
    const isNegative = num < 0;
    num = Math.abs(num);

    let result = "";

    for (const digitChar of num.toString()) {
      const digit = +digitChar; // Applying unary plus to convert character to number
      result += digit * digit;
    }

    let squaredNum = +result; // Applying unary plus to convert result string to number

    // If the original input was negative, return the squared number as negative
    if (isNegative) {
      squaredNum *= -1;
    }

    return squaredNum;
  }
}

console.log(Kata.squareDigits(9119));
