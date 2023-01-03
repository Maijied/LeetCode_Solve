/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n, sum = 0, d = 10) {
    console.log("isHappy", n, sum, d)
    if(n === 1){
        return true;
    } 
    if(d === 0){
        return false;
    } 
    console.log(" n+",n, n+'')
    for(let c of n.toString()) {
        console.log("C Sum",sum += +c * +c)
        // sum += +c * +c;
    }
    return isHappy(sum, 0, d - 1);
};