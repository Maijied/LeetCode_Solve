/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    let count = 0;
    for(let i = 1; i <= n/2; i++){
        console.log("i",i)
        if(n%i == 0){
            count++;
        }
    }
    if(n == 4){
        return true;
    }
    if(n == 2){
        return false;
    }
    console.log("count",count)
    return count == 2 ? true : false;
};
//https://leetcode.com/problems/three-divisors/description/