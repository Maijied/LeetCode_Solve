var myAtoi = function(s) {
    return Math.max(Math.min(parseInt(s) || 0, 2147483647), -2147483648)
    // result = s.replace(/[^\d-.+]/g, '');  
    // console.log("result",result);
    // return result;
};

// Test Case =>
// s = "42","   -42","4193 with words","words and 987","-91283472332"