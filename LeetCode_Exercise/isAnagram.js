// Solution: Time complexity - O(n); Space complexity: O(n)
function isAnagram(s,t){
    let char = new Map();

    if (s.length !== t.length){
        return false;
    }

    for (let i=0; i < s.length; i++){
        char.set(s[i], (char.get(s[i])||0)+1);
    }

    for (let j=0; j < t.length; j++){
        if (char.has(t[j]) == true){
            char.set(t[j], char.get(t[j])-1);
            if (char.get(t[j]) == 0){
                char.delete(t[j]);
            }
        } 
    }
    
    if (char.size == 0){
        return true;
    } else{
        return false;
    }

}