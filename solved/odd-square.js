/**
 * @subject - Votre programme doit trouver tous les nombres impairs du tableau et calculer les carrEs de ce nombre puis imprimer sans repetition et dans l'ordre inverse
 * @exemple - array = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5] | result -> 25 9 1
 * @feat - join() | map() | Math.pow() | sort() | filter() | Set()
 */
function oddSquare() {
	const array = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];

	let pair = array.filter((p) => p % 2 === 1); // filtrer les nombres impairs
	let uniqPair = [...new Set(pair)]; // suppression des doublons
	let result = uniqPair.map((p) => Math.pow(p, 2)).sort((a, b) => b - a); // calculer les carrEs de chaque nombre et trier par ordre decroissant

	console.log(result.join` `);
}

oddSquare();
