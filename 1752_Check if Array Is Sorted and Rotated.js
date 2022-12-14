/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let breakpoint = 0;
    let rotateFinalArray = [];
    let result;
    for(let i = 0; i < nums.length-1; i++){
        if(nums[i] > nums[i+1]){
            if(nums.length == 2){
                breakpoint = i+1;
                break
            }
            breakpoint = i;
            if(breakpoint == 0){
                breakpoint =1;
            }
            breakpoint = i;
            break;
        }else if(nums[i] == nums[i+2]){
            breakpoint = i;
            break; 
        }
    }
    console.log("breakpoint",breakpoint);
    rotateFinalArray = rotateArray(nums,breakpoint);
    result = isArraySorted(rotateFinalArray);
    return result;
};

 function rotateArray(nums, k) {
  for (let i = 0; i < k; i++) {
      nums.unshift(nums.pop());
  }
  return nums;
}


function isArraySorted(arr) {
    console.log("arr",arr);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i + 1] && arr[i + 1] > arr[i]) {
        continue;
      } else if (arr[i + 1] && arr[i + 1] < arr[i]) {
        return false;
      }
    }
    return true;
  }