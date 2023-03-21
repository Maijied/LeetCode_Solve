/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    //Approach 1
    
    var count = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == 0){
            count += 1;
            for(let j = i+1; j < nums.length; j++){
                if(nums[j] == 0)
                {
                    count += 1;
                }
                else{
                    j = nums.length;
                }
            }
        }   
    }
    
    return count;

    //Approach 2
    
    let count = 0;
    let length = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            length++;
            count += length;
        } else length = 0;
    }
    return count;

};