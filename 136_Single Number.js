/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //Method 1
    // let array = nums;
    // let l = array.length,i, j,unique = [];
    // for (i = 0; i < l; i++) {
    //     for (j = 0; j < l; j++) {
    //         if (i === j) {
    //             continue;
    //         }
    //         if (array[i] === array[j]) {
    //             break;
    //         }
    //     }
    //     if (j === l) {
    //         unique.push(array[i]);
    //     }
    // }
    // return unique; //Runtime ->357 ms

    // Method 2
    // return nums.filter((v, i) => nums.indexOf(v) === nums.lastIndexOf(v)); //1000 ms

    // Method 3
    return nums.reduce((acc, cur) => {
        console.log(acc,cur);
            return acc ^ cur;
        }, 0) //Runtime327 ms
        
};