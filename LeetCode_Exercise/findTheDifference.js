function findTheDifference (s, t) {
    let charCount = new Map();
    for (const char of t){
        charCount.set(char, (charCount.get(char)||0)+1);
    }
    for (const char of s){
        charCount.set(char, charCount.get(char)-1);
        if (charCount.get(char)==0){
            charCount.delete(char);
        }
    }
    return Array.from(charCount.keys())[0]
};



