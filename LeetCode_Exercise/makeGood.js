// Solution 1: Use Unicode character to check 
function makeGood(s) {
    let stack = [];
    for (const char of s){
        if (stack.length > 0 && Math.abs(char.codePointAt() - stack[stack.length-1].codePointAt()) == 32){
            stack.pop();
        } else{
            stack.push(char);
        }
    }
    return stack.join("");
};
// Solution 2: Use toUpperCase or toLowerCase to check
function makeGood2(s){
    let stack = [];
    for (const char of s){
        if (stack.length >0 && char.toUpperCase() == stack[stack.length-1].toUpperCase() && char!==stack[stack.length-1]){
            stack.pop();
        } else {
            stack.push(char);
        }      
    }
    return stack.join("");
};