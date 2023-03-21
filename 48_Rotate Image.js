/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(arr) {
    // let N = arr.length;
    // Method 1
    // for (i = 0; i < parseInt(N / 2); i++) {
    //         for (j = i; j < N - i - 1; j++) {
    //             var temp = a[i][j];
    //             a[i][j] = a[N - 1 - j][i];
    //             a[N - 1 - j][i] = a[N - 1 - i][N - 1 - j];
    //             a[N - 1 - i][N - 1 - j] = a[j][N - 1 - i];
    //             a[j][N - 1 - i] = temp;
    //         }
    //     }

    // Method 2
    // for(let i = 0; i < N; ++i)
    // {
    //     for(let j = 0; j < i; ++j)
    //     {
    //         let temp = arr[i][j];
    //         arr[i][j] = arr[j][i];
    //         arr[j][i] = temp;
    //     }
    // }
     
    // for(let i = 0; i < N; ++i)
    // {
    //     for(let j = 0; j < N / 2; ++j)
    //     {
    //         let temp = arr[i][j];
    //         arr[i][j] = arr[i][N - j - 1];
    //         arr[i][N - j - 1] = temp;
    //     }
    // }
    // Method 3
    // for (i = 0; i < N; i++) {
    //         for (j = 0; j < N - i; j++) {
    //             var temp = arr[i][j];
    //             arr[i][j] = arr[N - 1 - j][N - 1 - i];
    //             arr[N - 1 - j][N - 1 - i] = temp;
    //         }
    //     }
         
    //     for (i = 0; i < N / 2; i++) {
    //         for (j = 0; j < N; j++) {
    //             var temp = arr[i][j];
    //             arr[i][j] = arr[N - 1 - i][j];
    //             arr[N - 1 - i][j] = temp;
    //         }
    //     }
    // Method 4
    var n = arr.length;
  
        // Transpose of matrix
        for (i = 0; i < n; i++) {
            for (j = i+1; j < n; j++) {
                var temp = arr[i][j];
                arr[i][j] = arr[j][i];
                arr[j][i] = temp;
            }
        }
          
        // Reverse individual rows
        for (i = 0; i < n; i++) {
            var low = 0, high = n-1;
            while (low < high) {
                var temp = arr[i][low];
                arr[i][low] = arr[i][high];
                arr[i][high] = temp;
                low++;
                high--;
            }
        }
};