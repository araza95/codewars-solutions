/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
Examples

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes

    All numbers are valid Int32, no need to validate them.
    There will always be at least one number in the input string.
    Output string must be two numbers separated by a single space, and highest number is first.
*/

// Both solution have the same time complexity i.e. O(n) Linear.

export class Kata {
  static highAndLow(numbers: string): string {
    const array = numbers.split(" ");

    let largest = array[0];

    let smallest = array[0];

    for (let index = 0; index < array.length; index++) {
      if (+largest < +array[index]) {
        largest = array[index];
      }
      if (+smallest > +array[index]) {
        smallest = array[index];
      }
    }
    return `${largest} ${smallest}`;
  }
}

console.log(Kata.highAndLow("-1 0"));

// Second approach
export class Kata2 {
  static highAndLow(numbers: string): string {
    const array = numbers.split(" ").map(Number); // Convert string numbers to actual numbers
    const highest = Math.max(...array); // Find the highest number
    const lowest = Math.min(...array); // Find the lowest number
    return `${highest} ${lowest}`;
  }
}
