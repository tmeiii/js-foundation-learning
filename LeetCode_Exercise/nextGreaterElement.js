// Time complexity: O(n*m)
function nextGreaterElement(nums1, nums2){
    let ans = [];
    for (let i=0; i < nums1.length; i++){
        for (let j = nums2.indexOf(nums1[i]) + 1; j < nums2.length; j++){
            if (nums1[i] < nums2[j]){
                ans.push(nums2[j]);
                break;
            }
        }

        if (ans[i] == null){
            ans.push(-1);
        }
    }
    return ans;
}