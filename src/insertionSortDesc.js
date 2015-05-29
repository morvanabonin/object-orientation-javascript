function insertionSortDesc(cards) {
    var len = cards.length;
    var i, j, key;

    for(i = 2; i < len; i++) {
        key = cards[i];
        j = i - 1;
        while (j >= 0 && cards[j] < key) {
            cards[j + 1] = cards[j];
            j = j - 1;
        }
        cards[j + 1] = key;
    }
    console.log('Insertion Sort - 1ª função:');
    console.log(cards);
}

function testeArray(cards) {
	var len = cards.length;
	var i;

	for (i = 0; i < len; i++) {
		console.log("i: " + i);
		console.log("cards[i]: " + cards[i]);
	}

}

var cards = [5, 2, 4, 6, 1, 3];
//testeArray(cards);
insertionSortDesc(cards);

