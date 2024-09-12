function minLength(s){
    let stack=[];
    for (const char of s){
        if (stack.length > 0 && (stack[stack.length-1] + char == "AB"|| stack[stack.length-1] + char == "CD" )){
            stack.pop();
            continue;
        } else{
            stack.push(char);
        };
    };
    return stack.length;
};