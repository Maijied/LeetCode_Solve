var arr = [ [ 1, 2, 3, 4 ],
            [ 5, 6, 7, 8 ],
            [ 9, 10, 11, 12 ], 
            [ 13, 14, 15, 16 ] ];
rotate(arr);
printMatrix(arr)

function rotate(arr) { 
var len = arr.length;
for (let i = 0; i < len; i++) {
    for (let j = i+1; j < len; j++){
        var temp  = arr[i][j];
        arr[i][j] = arr[j][i];
        arr[j][i] = temp;
    }
}

for (let i = 0; i < len; i++) {
    var low = 0; high = len-1;
    while (low < high) {
        var temp = [i][low];
        [i][low] = [i][high];
        [i][high] = temp;
        low++;
        high--;
    }
}

}
function printMatrix(arr) {
    var n = arr.length;
    console.log('n',n);
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++)
          console.log(arr[i][j]);
    }
}


	// function rotate(arr) {

	// 	var n = arr.length;

	// 	// Transpose of matrix
	// 	for (i = 0; i < n; i++) {
	// 		for (j = i+1; j < n; j++) {
	// 			var temp = arr[i][j];
	// 			arr[i][j] = arr[j][i];
	// 			arr[j][i] = temp;
	// 		}
	// 	}
		
	// 	// Reverse individual rows
	// 	for (i = 0; i < n; i++) {
	// 		var low = 0, high = n-1;
	// 		while (low < high) {
	// 			var temp = arr[i][low];
	// 			arr[i][low] = arr[i][high];
	// 			arr[i][high] = temp;
	// 			low++;
	// 			high--;
	// 		}
	// 	}
	// }

	// // to print matrix
	// function printMatrix(arr) {
	// 	var n = arr.length;
	// 	for (i = 0; i < n; i++) {
	// 		for (j = 0; j < n; j++)
	// 			console.log(arr[i][j]);
	// 	}
	// }

	// // Driver code
	// var arr = [ [ 1, 2, 3, 4 ],
	// [ 5, 6, 7, 8 ],
	// [ 9, 10, 11, 12 ],
	// [ 13, 14, 15, 16 ] ];
	// rotate(arr);
	// printMatrix(arr);

