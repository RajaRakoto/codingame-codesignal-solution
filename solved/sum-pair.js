/**
 * @subject - Votre programme doit calculer la somme des chiffres paires d'un nombre 0 < N < 2^32
 * @exemple - N = 120789466 | result -> 26 (2+0+8+4+6+6)
 * @feat - String() | Number() | map() | forEach()
 */
function sumPair() {
	const N = 120789466;

	let NtoArray = String(N).map((N) => {
		return Number(N);
	});

	let result = 0;

	NtoArray.forEach((n) => {
		if (n % 2 === 0) {
			result += n;
		}
	});

	console.log(result);
}

sumPair();
