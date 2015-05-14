function insertionSort(cards) {
    for( var i = 2; cards.length;) {
        var card = cards[i];
        var j = i - 1;
        while (j > 0 && cards[j] > card) {
            cards[j + 1] = cards[j];
            j = j - 1;
        }
        cards[j + 1] = card;
    }
    return cards[i];
}

var arrayCards = [5, 2, 4, 6, 1, 3];
console.log(insertionSort(arrayCards));
