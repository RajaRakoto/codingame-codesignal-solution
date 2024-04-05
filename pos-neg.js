/**
 * @subject - Un numero vous est attribuE n, le nombre n peut etre negatif ou positif. Si n est negatif, imprimer les nombres a partir de n a 0 en ajoutant 1 a n. Si positif, imprimez les nombres de n-1 a 0 en soustrayant 1 de n. Si n est nulle, imprimez juste "Already Zero"
 * @exemple - n = -5 | result -> -5 -4 -3 -2 -1 0 | n = 5 | result -> 4 3 2 1 0
 * @feat - Array() | Math.abs() | map() | reverse() | unshift() | Number() | result() | toString() | join()
 */
function negPos() {
	const n = 5;
	const number = [...Array(Math.abs(n))].map((_, i) => i);
	let result;

	if (n < 0) {
		result = number.map(n => '-' + n);
		result.reverse();
		result[result.length - 1] = 0;
		result.unshift((Number(result[0]) - 1).toString());
	} else {
		result = number.map(n => n);
		result.reverse();
	}

	console.log(n !== 0 ? result.join` ` : 'Already Zero');
}

negPos();
