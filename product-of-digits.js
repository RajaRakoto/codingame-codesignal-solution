/**
 * @sujet - Imprimer le produit de tous les chiffres d'un nombre n
 * @exemple - n = 1234 | result -> 24 (1*2*3*4)
 * @feat - Number()
 */
function productOfDigits() {
	const n = 1234;
	const m = [...String(n)];
	let result = 1;

	m.forEach(number => {
		result *= Number(number);
	});

	console.log(result);
}

productOfDigits();
