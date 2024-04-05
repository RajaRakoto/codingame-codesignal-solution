/**
 * @subject - Les lettres de l'alphabet occupent les positions A=1, B=2, C=3... Lorsqu'elles sont classEs par ordre alphabetique. Calculer la somme des positions alphabetiques des lettres dans la phrase donnEe. Les positions ne sont pas sensibles a la casse et les non-lettres sont ignorEes
 * @exemple - str = "a" | result -> 1 | str = "ab!" | result -> 3 | str = "Hello" | result -> 52
 * @feat - toLowerCase() | fromCharCode() | keys() | slice() | indexOf() | map() | reduce()
 */
function alphabetIndexSum() {
	const str = "Hello";
	console.log(
		[...str.toLowerCase()]
			.map(
				(w) =>
					[...String.fromCharCode(...Array(123).keys()).slice(97)].indexOf(w) +
					1,
			)
			.reduce((t, i) => t + i),
	);
}

alphabetIndexSum();
