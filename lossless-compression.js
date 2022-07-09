/**
 * @sujet -  La sortie de base est "Nombre de répétitions, lettre, nombre de répétitions, lettre" et ainsi de suite, jusqu'à ce que la longueur de la chaîne soit atteinte.
 * @exemple -  "HELLO" serait converti en 1H1E2L1O
 */
function losslessCompression() {
	const s = "HELLO";

	let c = s[0];
	let n = 0;
	let result = [];

	[...s].forEach(s => {
		if (s == c) {
			n++;
		} else {
			result.push(`${n}${c}`);
			n = 1;
			c = s;
		}
	});

	let i = s.length - 1;
	let j = 1;
	while (true) {
		if (s[i] == s[i - 1]) {
			j++;
			i--;
		} else {
			result.push(`${j}${s[s.length - 1]}`);
			break;
		}
	}

	console.log(result.join``);
}

losslessCompression();
