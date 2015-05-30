function insertionSort(cards) {
    var len = cards.length;
    var i, j, key;

    for(i = 1; i < len; i++) {
        key = cards[i];
        j = i - 1;
        while (j >= 0 && cards[j] > key) {
            cards[j + 1] = cards[j];
            j = j - 1;
        }
        cards[j + 1] = key;
    }
    console.log('Insertion Sort - 1ª função:');
    console.log(cards);
}


function insertionSort2(cards) {
    var len = cards.length;
    for (index = 1; index < len; index++) {
        currentvalue = cards[index];
        position = index;
        while (position > 0 && cards[position - 1] > currentvalue) {
            cards[position] = cards[position-1];
            position = position -1;
        }
        cards[position] = currentvalue;
    }
    console.log('Insertion Sort - 2ª função:');
    console.log(cards);
}

function insertionSort3(cards) {

    var len = cards.length;
    var i, j, key; 

    for(i = 1; i < len; i++) {
        key = cards[i];
        
        for (j = i - 1; i > 0 && cards[j] > key; j--) {
            cards[j + 1] = cards[j];
        }
        cards[j+1] = key;
    }
    console.log('Insertion Sort - 3ª função:');
    console.log(cards);
}


var cards = [5, 2, 4, 6, 1, 3];
insertionSort(cards);
insertionSort2(cards);
insertionSort3(cards);


