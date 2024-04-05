/**
 * @subject - Votre programme doit calculer l'aire d'un trapeze
 * @exemple - a = 5 | b = 7 | h = 10 | result -> 60.0
 * @feat - toFixed()
 */
function trapeze() {
	const a = parseInt(readline());
	const b = parseInt(readline());
	const h = parseInt(readline());

	console.log((((a + b) * h) / 2).toFixed(1));
}

trapeze();
