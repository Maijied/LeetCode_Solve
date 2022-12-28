/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // Method 1
    // console.log("val",val)
    // let uniqueChars = [];
    // for(let i = 0; i < nums.length; i++){
    //     if(nums[i] != val){
    //         uniqueChars.push(nums[i])
    //     }
    // }
    // elementLength = uniqueChars.length;
    // console.log("elementLength",elementLength)
    // return elementLength;

    // Method 2
    // let newArr = nums.filter((item)=>item != val);
    // return newArr.length;
    // console.log("newAr", newArr.length);

    // Method 3
    // for(var i = nums.length - 1; i >= 0; i--){
    //     if(nums[i] === val){
    //         nums.splice(i, 1);
    //     }
    // }
    // console.log("nums",nums)
    // return nums.length;

    // Method 4
    // let length = nums.length;
    // let i = 0;
    // while (i < length) {
    //     if (nums[i] === val) {
    //         nums.splice(i, 1);
    //         length--;
    //     } else {
    //         i++;
    //     }
    // }
    // return nums.length;
    
   
};