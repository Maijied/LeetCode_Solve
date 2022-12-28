/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var lastIndex = digits[digits.length - 1];
     var replacement = lastIndex + 1;
    let lastIndexConvert = lastIndex.toString(); 
    if(lastIndexConvert.length == 2){
       if(lastIndexConvert.charAt(0) == '1')
    }
   
   
    digits[digits.length - 1] = replacement;
    return digits;
    // console.log("lastIndex",digits);
};