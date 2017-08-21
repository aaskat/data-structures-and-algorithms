arr = [2, 1, 4, 62, 6, 2, 1, 25, 52, 52]

Array.prototype.concat() = https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/concat



function quicksort(arr) {
    if (arr.length <= 1) {
		return arr;
    }
   
	 
    var arrLength = arr.length; 
	var pivotPosition = Math.floor(arrLength / 2);
	var pivotValue = arr[pivotPosition];
	var less = [],
	    more = [],
		same = [];
	
	for (var i = 0; i < arrLength; i++ ) {
		if (arr[i] === pivotValue) {
			same.push(arr[i]);
        } else if (arr[i] < pivotValue) {
			less.push(arr[i]);
        } else {
			more.push(arr[i]);
        }
    }

	return quicksort(less).concat(same, quicksort(more));
}
