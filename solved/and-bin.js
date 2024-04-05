/**
 * @subject - Votre programme doit effectuer un ET binaire sur les deux nombres binaires donnEs et afficher le resultat sur la sortie standard. Attention, le nombre de chiffres binaires doit rester le meme.
 * @exemple - n1 = "002", n2 = "011" | result -> 001 | n1 = "00000000000111", n2 = "10101010111100" | result -> 00000000000100
 * @feat - push() | join()
 */
function andBin() {
	const n1 = "00000000000111";
	const n2 = "00000000000100";
	let result = [];

	for (let i = 0; i < n1.length; i++) {
		result.push(n1[i] == 1 && n2[i] == 1 ? 1 : 0);
	}

	console.log(result.join``);
}

andBin();
