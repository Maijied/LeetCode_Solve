/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // Method 1 
    // return Math.floor(Math.sqrt(x)); // 83ms


    //Method 2
    // let i = 1;
    // const found = false;
    // while (!found){
    //   // If n is a perfect square
    //   if (i * i === x){
    //      return i;
    //   }else if (i * i > x){
    //      let res = square(x, i - 1, i);
    //      return Math.floor(res);
    //   };
    //   i++;
    // } 
    // 113ms

    // Method 4
    var low = 0, high = x;
    while(low <= high) {
         var mid = Math.floor((low + high) / 2);
         if(mid * mid > x) high = mid - 1;
         else low = mid + 1;
    }
    return high;
    // 95ms
};

    // Method 2 Extension
    // const square = (n, i, j) => {
    // let mid = (i + j) / 2;
    // let mul = mid * mid;
    // if ((mul === n) || (Math.abs(mul - n) < 0.00001)){
    //     return mid;
    // }else if (mul < n){
    //     return square(n, mid, j);
    // }else{
    //     return square(n, i, mid);
    // }
    // }