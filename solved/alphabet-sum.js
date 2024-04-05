/**
 * @subject - Votre programme doit imprimer la somme totale de la position alphabetique (index basE sur zero) de tous les caracteres de la chaine donnEe "n"
 * @exemple n = "HELLO WORLD !" | result -> 114 | n = "AAAA =-" | result -> 0
 * @feat - indexOf() | map()
 */
function alphabetSum() {
	const n = "HELLO WORLD !";
	const alphabet = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
	];
	let sum = 0;
	[...n].map((n) => {
		sum +=
			alphabet.indexOf(n) === -1
				? alphabet.indexOf(n) + 1
				: alphabet.indexOf(n);
	});
	console.log(sum);
}

alphabetSum();
