/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   
    // let uniqueChars = [];
    // let uniqueCharsLength = 0;
    // for(let i = 0; i < nums.length; i++){
    //     if(nums[i] != nums[i+1]){
    //         uniqueChars.push(nums[i]);
    //     }
    // }
    // console.log(uniqueChars);
    // uniqueCharsLength = uniqueChars.length;
    // return uniqueCharsLength;
    
    // nums.filter((item,index) => arr.indexOf(item) === index)
    
    // let uniqueChars = [...new Set(nums)];
    
        if(nums.lenght === 0)
            return null;
        
        if(nums.length === 1)
            return 1;
    
        for (var i = 0; i < nums.length; i++){
            if(nums[i] === nums[i+1]){
                console.log("tt1",i,nums[i]);
                nums.splice(i, 1);
                console.log("tt2",i,nums[i]);
    
                i--;
            }
        }
        return nums.length;
    // return uniqueChars.length;
    };