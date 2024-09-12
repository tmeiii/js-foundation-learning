function isValid(s) {
    let stack = [];
    let hashTa = new Map();
    hashTa.set(")", "(");
    hashTa.set("]", "[");
    hashTa.set("}", "{");
    for (const char of s){
        if (stack.length !== 0 && stack[stack.length -1] == hashTa.get(char)){
            stack.pop();
            continue;
        } else{
            stack.push(char);
        }
    }
    if (stack.length == 0){
        return true;
    } else{
        return false;
    }
};

