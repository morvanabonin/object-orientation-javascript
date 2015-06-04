function quickSort(vetor, iniVet, fimVet) {
	var i, j, pivo, aux;
	i = iniVet;
	j = fimVet; 
	///um pivo é feito da soma do 1º e último elemento do vetor e o resultado divido por 2 (existe problema nesta técnica)
	total = (iniVet + fimVet) / 2;
	pivo = total;
	console.log(pivo);
	while(i < j) {
		while (vetor[i] < pivo) {
			i = i + 1
		}
		while(vetor[j] > pivo) {
			j = j - 1;
		}
		if (i <= j) {
			aux = vetor[i];
			vetor[i] = vetor[j];
			vetor[j] = aux;
			i = i + 1;
			j = j - 1;
		}
	}

	if (j > iniVet) {
		quickSort(vetor, iniVet, j)
	}

	if (i < fimVet) {
		quickSort(vetor, i, fimVet);
	}

	return vetor;
}

var vetor = [5, 2, 4, 6, 1, 3];
var iniVet, vetorSize, fimVet;
iniVet = vetor[0];
vetorSize = vetor.length - 1;
fimVet = vetor[vetorSize];
quickSort(vetor, iniVet, fimVet);

// No QuickSort ele pega um vetor e divide, separando menores para um lado e maiores para o outro, utilizando para isso um pivo.
// É feita a verificação entre esses "vetores" e mergeado quando
// Virtualization and comparison sorting algorithims - video
