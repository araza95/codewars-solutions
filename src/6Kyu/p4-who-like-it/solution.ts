/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Note: For 4 or more names, the number in "and 2 others" simply increases.

*/

export const likes = (a: string[]): string => {
  if (a.length <= 0) return "no one likes this";

  if (a.length === 1) return `${a[0]} likes this`;

  if (a.length >= 1 && a.length <= 2) return `${a[0]} and ${a[1]} like this`;

  if (a.length >= 2 && a.length <= 3)
    return `${a[0]}, ${a[1]} and ${a[2]} like this`;

  if (a.length > 3)
    return `${a[0]}, ${a[1]} and ${a.length - 2} others like this`;

  return "";
};

console.log(likes(["Alex", "Jacob", "Mark"]));

// Alternative solution:

export const likes2 = (a: string[]): string => {
  const length = a.length;
  switch (length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${a[0]} likes this`;
    case 2:
      return `${a.join(" and ")} like this`;
    case 3:
      return `${a.slice(0, 2).join(", ")} and ${a[2]} like this`;
    default:
      return `${a.slice(0, 2).join(", ")} and ${length - 2} others like this`;
  }
};

console.log(likes2(["Alex", "Jacob", "Mark"]));
