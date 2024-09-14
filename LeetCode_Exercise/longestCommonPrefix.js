// function longestCommonPrefix(strs){
//     let countChar = new Map();
//     let first = strs[0];
//     for (const char of first){
//         countChar.set(char, (countChar.get(char)||0)+1);
//     }
//     return countChar;
// };

// console.log(longestCommonPrefix(["flower","flow","flight"]));

strs = ["flower","flow","flight"]
prefix = strs[0];
console.log(prefix)
let out = strs[1].indexOf(prefix);
console.log(out)
console.log(prefix.slice(0,-1))
