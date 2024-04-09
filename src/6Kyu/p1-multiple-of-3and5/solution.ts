/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

// Complexity: O(n)
export class Challenge {
  static solution(number: number): number {
    if (number < 0) return 0;
    let total = 0;
    for (let index = 2; index < number; index++) {
      if (index % 3 === 0 || index % 5 === 0) {
        total += index;
      }
    }
    return total;
  }
}

console.log(Challenge.solution(10));

// Wan'a try?
// https://www.codewars.com/kata/514b92a657cdc65150000006/train/typescript
