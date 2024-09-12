// Solution 1: for và indexOf --> Time complexity: O(n^2)
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const findValue = target - nums[i];
        let findValue_index = nums.indexOf(findValue);
        
        if (findValue_index !== -1 && findValue_index !== i) {
            return [i, findValue_index];
        }
    }
};

// Solution 2: Using Hash Table - Map --> Time complexity: O(n)
function twoSum2(nums, target) {
    const emptyIdx = new Map();
    for (let i=0; i < nums.length; i++){
        if (emptyIdx.has(target-nums[i])){
            return [i, emptyIdx.get(target-nums[i])];
        }
        emptyIdx.set(nums[i], i);
    }
};
