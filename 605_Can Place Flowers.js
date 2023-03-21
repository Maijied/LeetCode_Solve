/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    // Approach 1
    var flowerbadCount = flowerbed.length;
    for(let i = 0; i < flowerbadCount & n !== 0; ++i){
        if(flowerbed[i] === 0 && flowerbed[i+1] !== 1 && flowerbed[i-1] !== 1){
            n--;
            i++;
        }
    }
    return n <= 0;
    
    // Approach 2
    
    //     for (let i = 0; i < flowerbed.length && n !== 0; i++) {
    //     if (
    //       flowerbed[i] === 0 &&
    //       flowerbed[i - 1] !== 1 &&
    //       flowerbed[i + 1] !== 1
    //     ) {
    //       n--;
    //       i++;
    //     }
    //   }
    //   return n === 0;
    
    // Approach 3
    for(let i = 0; i < flowerbadCount; i++){
        if(flowerbed[i] == 0 && (i == 0 || flowerbed[i-1] == 0) && (i == flowerbadCount-1 || flowerbed[i+1] == 0 )){
            flowerbed[i] = 1;
            n--;
            i++;
        }
    }
    return n <= 0;
    };