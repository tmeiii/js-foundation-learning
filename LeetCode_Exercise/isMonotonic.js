function isMonotonic(nums){
    let isMonoI = true;
    let isMonoD = true;
    for (let i=0; i<nums.length-1; i++){
        if (nums[i]>nums[i+1]){
            isMonoI = false;
        };

        if (nums[i]<nums[i+1]){
            isMonoD = false;
        };

    };

    if (isMonoI == false && isMonoD == false){
        return false;
    } else{
        return true;
    };
};
