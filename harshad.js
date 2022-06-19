/**
 * @sujet - Votre programme doit verifier si un nombre est Harshad ou pas, un nombre de Harshad est un nombre entier divisible par la somme de ses propres chiffres.
 * @exemple - n = 1729 est un nombre de Harshad car 1 + 7 + 2 + 9 = 19 et 1729 = 19 × 91
 * @feat - map() | reduce() | Number() | toString() | reverse() | join()
 */
function harshad() {
	const n = 1729;
	const sum = [...n.toString()].map(n => Number(n)).reduce((t, n) => t + n);
	const rev = Number([...sum.toString()].reverse().join``);
	console.log(rev * sum === n ? true : false);
}

harshad();
