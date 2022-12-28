/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
//     const counts = {};
//     nums.forEach((x) => {
//     counts[x] = (counts[x] || 0) + 1;
// });
//     console.log(counts[])

    var counts = {};
    let max = 0;
    let key = 0;
    nums.forEach(function(element) {
    counts[element] = (counts[element] || 0) + 1;
    });

    for (var element in counts) {
         console.log(element + ' = ' + counts[element]);
        // return Math.max(element);
        if(max <= counts[element]){
            max = counts[element];
            key = element;
            console.log("max",max, "= key",key )
        }
   
    } 
   return key;
};
//https://leetcode.com/problems/majority-element/description/
