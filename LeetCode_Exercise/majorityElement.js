function majorityElement(nums){
    let n = nums.length;
    let count = new Map();

    for (let i=0; i < n; i++){
        count.set(nums[i], (count.get(nums[i])||0)+1);
    }
   
    let majorE = nums[0];

    if (n == 1){
        return majorE;
    }
    
    for (let i=1; i < n-1; i++){    
        if (count.get(majorE)<count.get(nums[i])){
            majorE = nums[i];
        } 
    }
    return majorE
}