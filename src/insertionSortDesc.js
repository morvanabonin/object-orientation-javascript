function insertionSort(cards) {
    var len = cards.length;
    var i, j, key;

    for(i = 2; i < len; i++) {
        key = cards[i];
        j = i - 1;
        while (j > 0 && cards[j] > key) {
            cards[j + 1] = cards[j];
            j = j - 1;
        }
        cards[j + 1] = key;
    }
    console.log('Insertion Sort - 1ª função:');
    console.log(cards);
}

var cards = [5, 2, 4, 6, 1, 3];
insertionSort(cards);


