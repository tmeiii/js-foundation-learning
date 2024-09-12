// Solution 1: Use Two Pointer - Time complexity: O(n)
function twoSum(numbers, target){
    let i=0;
    let j=numbers.length -1;
    while (i<j){
        if (numbers[i]+numbers[j]<target){
            i += 1;
        } else if(numbers[i]+numbers[j]>target){
            j -= 1;
        } else {
            return [i+1, j+1];
        };
    };
};

// Solution 2: Use Hash Table
function twoSum(numbers, target){
    let emptyIdx = new Map();
    for (let i=0; i <numbers.length; i++){
        find = target - numbers[i];
        if (emptyIdx.has(find)){
            return [emptyIdx.get(find)+1, i+1];
        } else{
            emptyIdx.set(numbers[i], i);
        }
    }
};
