/**
 * @subject - Observez l'exemple ci-dessous et implementez l'algorithme correspondant
 * @exemple - number = "5" | result -> 25 | number = "12" | result -> 9 | number = "421" | result -> 49 | number = "222" | result -> 36
 * @feat - map() | reduce() | Number()
 */
function sumSquare() {
	const number = '222';

	console.log(
		[...number].map(n => Number(n)).reduce((total, n) => total + n) ** 2,
	);
}

sumSquare();
