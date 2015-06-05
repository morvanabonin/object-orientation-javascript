function Merge(mergeArray, firstIdx, middleIdx, lastIdx) {
	var nOne, nTwo, L, R;
	var i = 0;
	var j = 0;

	nOne = middleIdx - 1;
	nTwo = (lastIdx - middleIdx) + 1;

	L = Left(mergeArray, nOne);
	R = Right(mergeArray, nTwo, lastIdx);

	for (k = firstIdx; k <= lastIdx; k++) {
		if(L[i] <= R[j]) {
			mergeArray[k] = L[i];
			i = i + 1;
		} else {
			mergeArray[k] = R[j];
			j = j + 1;
		}
		console.log(mergeArray[k]);
	}
}

function Left(mergeArray, nOne) {
	var left = [];

	for (i = 0; i <= nOne; i++) {
		left.push(mergeArray[i]);
		left = sort(left);
	}
	return left;
}

function Right(mergArray, nTwo, lastIdx) {
	var right = [];

	for (i = nTwo; i <= lastIdx; i++) {
		right.push(mergeArray[i]);
		right = sort(right);
	}
	return right;
}

function sort(arraySort) {
    var len = arraySort.length;
    var i, j, key;

    for(i = 1; i < len; i++) {
        key = arraySort[i];
        j = i - 1;
        while (j >= 0 && arraySort[j] > key) {
            arraySort[j + 1] = arraySort[j];
            j = j - 1;
        }
        arraySort[j + 1] = key;
    }
    return arraySort;
}


//var mergeArray = [5, 2, 4, 7, 1, 3, 2, 6];
var mergeArray = [5, 2, 8, 4, 7, 1, 3, 6, 9, 0];
var firstIdx, middleIdx, lastIdx;
firstIdx = 0;
lastIdx = mergeArray.length - 1;
middleIdx = Math.ceil(lastIdx / 2);
Merge(mergeArray, firstIdx, middleIdx, lastIdx);
