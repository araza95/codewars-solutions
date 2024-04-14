/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
Examples

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

*/

// Both solutions have the same time complexity O(n).

export const findOdd = (xs: number[]): number => {
  const occurrences: { [key: number]: number } = {};

  let result = 0;
  for (const num of xs) {
    occurrences[num] ? occurrences[num]++ : (occurrences[num] = 1);
  }

  for (const iterator of Object.keys(occurrences)) {
    const value = occurrences[parseInt(iterator)];
    if (value % 2 !== 0) {
      result = parseInt(iterator);
      break;
    }
  }
  return result;
};

console.log(findOdd([1, 2, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

// A Unique approach, Personally I don't recommend these type of complex solution.
// Learn more about XOR!
//
export const findOddXOR = (xs: number[]): number => {
  let result = 0;
  for (const num of xs) {
    result ^= num;
  }
  return result;
};

console.log(findOddXOR([1, 2, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); // Output should be 4
