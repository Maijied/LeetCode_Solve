/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let arrLen = nums.length;
    for(let i = 0; i < nums.length; i++){
       if(nums[i] === target){
           return i;
       }else if(target < nums[i] ){
           return i;
       }else if(target > nums[nums.length - 1] ){
           return nums.length;
       }
    }
    
};