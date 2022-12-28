/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let count = 0;
    let oddCount = 0;
    for(let i = 0; i < nums.length; i++){
        if(i < 0) return 0;
        else if(nums.length == 2){
            // if(nums[i] < nums[i+1]) {
            //     return nums[1];
            // }else if(nums[i] > nums[i+1]){
            //     return nums[0];
            // }else if(nums[i] == nums[i+1]){
            //     return nums[i];
            // }

            return Math.max(nums[0], nums[1]);
            
        }
        else if(i%2 === 0){
            count = fmax(count+nums[i],oddCount);
        //    count += nums[i];
        }
        // else if(i%2 !== 0){
        //     oddCount += nums[i];
        // }
        else{
             oddCount = fmax(b+nums[i],count);
        }
         return fmax(count,oddCount);
    }
    count = count > oddCount ? count : oddCount;
    return count;
    // if(count < oddCount ){
    //     return oddCount;
    // }else{
    //     return count;
    // }
};


// https://leetcode.com/problems/house-robber/description/