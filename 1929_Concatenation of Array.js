/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var getConcatenation = function(nums) {
    // var temp = [];
    // for(let i = 0; i, i < (nums.length)*2; i++){
    //     temp.push(nums[i]);
    // }
    // console.log(temp);
    var n=2;
    var newarray = [];
    while(n--){ 
        var newarray = newarray.concat(nums); 
    }
    return newarray;
};