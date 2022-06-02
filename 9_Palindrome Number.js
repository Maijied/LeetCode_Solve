/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    var reverse = "";
    var reverseX = x.toString();
    for(var i = reverseX.length - 1; i >= 0; i--){
        reverse += reverseX[i];
    }
    var reverseToNum = parseInt(reverse);
    if(reverseToNum === x) {
        return true;
    }
    else if(reverseToNum !== x){
     return false;   
    }
};
// Link: https://leetcode.com/problems/palindrome-number/