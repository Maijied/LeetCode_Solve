/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let array = nums;
    let l = array.length,i, j,unique = [];

    for (i = 0; i < l; i++) {
        for (j = 0; j < l; j++) {
            if (i === j) {
                continue;
            }
            if (array[i] === array[j]) {
                break;
            }
        }
        if (j === l) {
            unique.push(array[i]);
        }
    }
    return unique; //Runtime ->357 ms
};




// Method 2
let  unique = nums.filter((v, i) => nums.indexOf(v) === nums.lastIndexOf(v));
   return unique;