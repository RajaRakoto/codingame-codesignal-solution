/**
 * @sujet - Vous recevez une seule chaine "word", votre programme doit convertir chaque caractere en sa valeur ASCII et additionner les nombres impairs
 * @exemple -  word = "ABC" | result -> 132 (65+67)
 * @feat - Array.from() | map() | filter() | reduce()
 */
function asciiSumOdd() {
	const word = "ABC";

	console.log(
		Array.from(word)
			.map(w => w.charCodeAt())
			.filter(w => w % 2 === 1)
			.reduce((total, e) => total + e),
	);
}

asciiSumOdd();
