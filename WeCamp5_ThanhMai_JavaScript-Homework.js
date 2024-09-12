// //On class
// const arr = [1, 5, 8, 6, 9];
// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }

// console.log(max);


// //Homework 1: TwoSum
// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//       const findValue = target - nums[i];
//       let findValue_index = nums.indexOf(findValue);
      
//       if (findValue_index !== -1 && findValue_index !== i) {
//           return [i, findValue_index];
//       }
//   }
// };

// console.log(twoSum([2, 7, 11, 15], 9)); 
// console.log(twoSum([3, 2, 4], 6));  
// console.log(twoSum([3, 3], 6));   

// Solution 2:
const twoSum = function(nums, target) {
    const pairIdx = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (target - num in pairIdx) {
            return [i, pairIdx[target - num]];
        }
        pairIdx[num] = i;
    }    
};
console.log(twoSum([2, 7, 11, 15], 9)); 
console.log(twoSum([3, 2, 4], 6));  
console.log(twoSum([3, 3], 6));   


// // Homework 2: Valid parentheses
// function isValid(s) {
//   let arr2 = [];
//   const template = ["(", ")", "[", "]", "{", "}"];

//   for (let i = 0; i < s.length; i++) {
//       for (let j = 0; j < template.length; j++) {
//           if (s[i] === template[j]) {
//               if (j % 2 === 0) {
//                   arr2.push(s[i]); 
//               } else {

//                   if (arr2.length === 0 || arr2[arr2.length - 1] !== template[j - 1]) {
//                       console.log(false); 
//                       return false;
//                   }
//                   arr2.pop(); 
//               }
//           }
//       }
//   }
  
//   const result = arr2.length === 0;
//   console.log(result);
//   return result;
// };

// isValid("(]");       
// isValid("()[]{}");   
// isValid("([])");     