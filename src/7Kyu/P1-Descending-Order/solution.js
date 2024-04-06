/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
Examples:

Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

*/
function descendingOrder(n) {
    var numberArray = n.toString().split("");
    //   console.log(numberArray);
    for (var index = 0; index < numberArray.length; index++) {
        if (numberArray[index] < numberArray[index + 1]) {
            var temp = numberArray[index];
            numberArray[index] = numberArray[index + 1];
            numberArray[index + 1] = temp;
            index = -1;
        }
    }
    return parseInt(numberArray.join(""), 10);
}
console.log(descendingOrder(42145));
