"use strict";
/*
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.well = void 0;
function well(x) {
    var goodIdeasCount = x.reduce(function (count, idea) { return (idea === "good" ? count + 1 : count); }, 0);
    return goodIdeasCount === 0
        ? "Fail!"
        : goodIdeasCount <= 2
            ? "Publish!"
            : "I smell a series!";
}
exports.well = well;
console.log(well(["bad", "bad", "bad"]));
